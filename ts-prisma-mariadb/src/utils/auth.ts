import {IUser} from "../interfaces/User";
import jwt from "jsonwebtoken";
import {config} from "../config";
import {prisma} from "../database";

export const decodeAuthHeader = async (req: Request) => {
    let access_token;
    try{
        access_token = req.header('Authorization').replace('Bearer ', '');
    }catch (e) {
        access_token = req.query.token;
    }
    if(!access_token) return null;
    const decoded = jwt.verify(access_token, config.SECRET_TOKEN);
    return await prisma.user.findFirst({where: {id: decoded.id}});
}

export const encodeAuthHeader = (user: IUser) => {
    const userToken = {
        id: user.id,
        email: user.email,
    };
    return jwt.sign(userToken, config.SECRET_TOKEN, {
        expiresIn: 86400 * 365,
    });
}