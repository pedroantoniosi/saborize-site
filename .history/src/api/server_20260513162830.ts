import express from "express";
import publicRoutes from "./routes/public";

const app = express();
app.use(express.json);

app.listen(3001, () => console.log("servidor rodando com sucesso"));

app.use("/", publicRoutes);
