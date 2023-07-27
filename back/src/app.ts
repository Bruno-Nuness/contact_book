import "reflect-metadata";
import "express-async-error";
import express from "express";
import { ClientRoute } from "./routes/client.routes";
import { LoginRouter } from "./routes/login.routes";
import { ContactRouter } from "./routes/contact.routes";
import { handleErrors } from "./errors/AppError";

const app = express();
app.use(express.json());
app.use("/client", ClientRoute);
app.use("/login", LoginRouter);
app.use("/contact", ContactRouter);
app.use(handleErrors);

export default app;
