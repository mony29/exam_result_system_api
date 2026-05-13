import bcrypt from "bcryptjs";
import { mockUser } from "../../models/user/user.model.js";

export const loginService = async (username: string, password: string) => {
  const user = mockUser.find((u) => u.username === username);
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  return {
    id: user.id,
    username: user.username,
    role: user.role,
    nickName: user.nickName,
  };
};