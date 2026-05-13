import type { Request, Response } from "express";

const getAction = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get others actions" });
}

export {
  getAction
}