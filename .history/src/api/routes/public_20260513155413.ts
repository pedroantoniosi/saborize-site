import express from "express";

const app = express.Router();

app.post("/", (req, res) => {
  const user = req.body;
});
