import express from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/cadastro", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.status(201).json(user);
});

export default router;
