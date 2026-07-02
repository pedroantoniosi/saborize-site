import express from "express";

const app = express.Router();

app.post("/", (req, res) => {
  res.send("API funcionando");
});
