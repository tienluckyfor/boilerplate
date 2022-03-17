import validator from "validator";
import {IRegisterUser, ILoginUser, IUser} from "../../../interfaces/User";
import {encryptPassword, comparePassword,} from "../../../utils/handlePassword";
import {prisma} from "../../../database";
import _ from "lodash";
import {sendMailRegisterUser} from "../../../mail";
import {encodeAuthHeader} from "../../../utils/auth";

export const UserMutation = {
    register: async (parent: any, args: IRegisterUser, context: any) => {
        const {user} = args;
        // Validations
        if (user.name.length > 10)
            throw new Error("The name must have at least 10 characters.");
        if (!validator.isEmail(user.email))
            throw new Error("Invalid email address.");
        if (user.password.length < 8)
            throw new Error("The password must be at least 8 characters long.");
        if (user.password !== user.confirmPassword)
            throw new Error("Passwords do not match.");
        const searchEmail = await prisma.user.findFirst({
            where: {
                email: user.email,
            },
        });
        if (searchEmail)
            throw new Error("Email already registered.");
        // try {
        const password = await encryptPassword(user.password);
        const data = _.merge(_.omit(user, 'confirmPassword'), {password});
        const savedUser = await prisma.user.create({data}) as IUser;
        sendMailRegisterUser(savedUser);
        return {
            user: savedUser,
            access_token: encodeAuthHeader(savedUser),
            message: "We send you a verification message!!!",
        };
        // } catch (error) {
        //     throw new Error(
        //         "An error occurred while trying to register the account. Please try again."
        //     );
        // }
    },
    login: async (parent: any, args: ILoginUser) => {
        const {user} = args;
        const userFound = await prisma.user.findFirst({
            where: {name: user.name},
        }) as IUser;
        if (!userFound) throw new Error("Error logging in.");
        if (!(await comparePassword(user.password, userFound.password)))
            throw new Error("Error logging in.");
        return {
            access_token: encodeAuthHeader(userFound),
            user: userFound
        };
    },
};
