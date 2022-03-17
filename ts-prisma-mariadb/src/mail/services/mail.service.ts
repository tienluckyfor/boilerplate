import nodemailer from "nodemailer";
import {config} from "../../config";

export const transporter = nodemailer.createTransport({
    service: config.NODEMAILER_SERVICE,
    host: config.NODEMAILER_HOST,
    port: parseInt(config.NODEMAILER_PORT),
    secure: false,
    auth: {
        user: config.NODEMAILER_USER,
        pass: config.NODEMAILER_PASS,
    },
});