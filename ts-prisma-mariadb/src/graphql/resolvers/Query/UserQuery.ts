import {prisma} from "../../../database";
import {IDetailUser, } from "../../../interfaces/User";

export const UserQuery = {
    all_users: async () => {
        const users = await prisma.user.findMany();
        return users;
    },
    detail_user: async (parent: any, args: IDetailUser) => {
        const {user} = args;
        return await prisma.user.findFirst(user.id);
    },
    detail_me: async (parent: any, args: any, req: Request) => {
        return req.user;
    },
};
