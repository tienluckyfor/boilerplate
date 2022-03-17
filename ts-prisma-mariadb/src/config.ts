import dotenv from "dotenv";

dotenv.config();

export const config = {
    APP_NAME: process.env.APP_NAME || "",

    NODEMAILER_SERVICE: process.env.NODEMAILER_SERVICE || "gmail",
    NODEMAILER_HOST: process.env.NODEMAILER_HOST || "smtp.ethereal.email",
    NODEMAILER_PORT: process.env.NODEMAILER_PORT || "587",
    NODEMAILER_USER: process.env.NODEMAILER_USER || "",
    NODEMAILER_PASS: process.env.NODEMAILER_PASS || "",

    SECRET_TOKEN: process.env.SECRET_TOKEN || "SECRET_TOKEN",
};
