import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/cadastro", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "name, email e password são obrigatórios" });
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
      select: { id: true, name: true, email: true, createdAt: true }, // nunca retorna a senha
    });

    return res.status(201).json(user);
  } catch (err: any) {
    // P2002 = unique constraint (email duplicado)
    if (err?.code === "P2002") {
      return res.status(409).json({ error: "E-mail já cadastrado" });
    }
    console.error(err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;
