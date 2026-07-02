import express from "express";
import publicRouter from "./routes/public";

const app = express();

app.listen(3001, () => console.log("servidor rodando com sucesso"));
