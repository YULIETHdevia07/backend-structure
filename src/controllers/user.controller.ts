import type { Request, Response } from "express";

import bcrypt from "bcryptjs";

import prisma from "../../prisma/client.js";

export const getUsers = async (
  req: Request,
  res: Response
) => {
  const users = await prisma.user.findMany();

  return res.json(users);
};

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = user;

    return res.status(201).json({
      message: "Usuario registrado correctamente",
      userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al registrar usuario",
      error,
    });
  }
};