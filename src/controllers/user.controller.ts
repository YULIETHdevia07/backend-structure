import type { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  return res.json({
    message: "Lista de usuarios",
  });
};