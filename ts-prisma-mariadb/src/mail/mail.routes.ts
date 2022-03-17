import {Router} from "express"
import {htmlMailRegisterUser} from "./services/sendMailRegisterUser";

const router = Router();

router.get("/mail-register", async (req, res) => {
    const user = {
        "name": "name",
        "email": "123dinhcao@gmail.com",
        "password": "password",
        "confirmPassword": "password"
    };
    const html = await htmlMailRegisterUser(user);
    res.send(html);
});

export default router;