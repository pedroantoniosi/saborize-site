import express from "express";
import publicRoutes from "./routes/public";

const app = express();

app.use(express.json());

app.use("/", publicRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando com sucesso");
});

//saborize
//@saborize123
