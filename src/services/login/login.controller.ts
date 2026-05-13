import type { Request, Response } from "express";
import { loginService } from "./login.service.js";
import { signToken } from "../../utils/jwt.js";

const loginAction = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await loginService(username, password);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = signToken(user);

    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default loginAction;
