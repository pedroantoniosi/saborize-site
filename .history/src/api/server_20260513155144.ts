import express from "express";

const app = express();

app.listen(3001, () => console.log("servidor rodando com sucesso"));

app.get("/", (req, res) => {
  res.send("API funcionando");
});
