import ejs from "ejs";
import path from "path";
import {config} from "../../config";
import {transporter} from "./mail.service";
import {IUser} from "../../interfaces/User";

export const htmlMailRegisterUser = async (user?: IUser) => {
    return await ejs.renderFile(
        path.join(__dirname, "../templates/registerUser.ejs"),
        {user},
        {async: true, }
    );
}

export const sendMailRegisterUser = async (user: IUser): Promise<void> => {
    await transporter.sendMail({
        from: `"${config.APP_NAME}" <${config.NODEMAILER_USER}>`,
        to: user.email,
        subject: "Validate account",
        html: await htmlMailRegisterUser(user)
    });
}