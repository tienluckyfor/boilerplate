import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mailRoutes from "./src/mail/mail.routes";
import resfulResponseFormat from "./src/middlewares/resfulResponseFormat";

const app = express();
app.use(cors());
app.use(express.json());

app.use(resfulResponseFormat);
app.use(bodyParser.json({limit: "550mb"}));
app.use(bodyParser.urlencoded({limit: "550mb", extended: true, parameterLimit:50000}));

app.set("view engine", "ejs");
app.use(mailRoutes);

export default app;