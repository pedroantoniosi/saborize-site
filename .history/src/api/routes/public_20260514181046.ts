import express from "express";
import type { Request, Response } from "express";
import argon2 from "argon2";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.post("/cadastro", async (req: Request, res: Response) => {
  const { name, email, password } = req.body as {
    name: string;
    email: string;
    password: string;
  };

  const hashedPassword = await argon2.hash(password);

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "name, email e password são obrigatórios" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    return res.status(201).json(user);
  } catch (err: unknown) {
    const prismaError = err as { code?: string };

    if (prismaError?.code === "P2002") {
      return res.status(409).json({ error: "E-mail já cadastrado" });
    }

    console.error(err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;
