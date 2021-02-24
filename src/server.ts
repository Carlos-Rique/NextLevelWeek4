import "reflect-metadata";
import express from 'express';
import "./database";
import { router } from "./routes";

const app = express();

//patch => alteração específica

app.use(express.json());
app.use(router);


app.listen(3333, () => console.log("Server is running!"));

