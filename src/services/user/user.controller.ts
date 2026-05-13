import type { Request, Response } from "express";

const getUserAction = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get user" });
}

export {
  getUserAction
}