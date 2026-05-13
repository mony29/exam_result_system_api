import bcrypt from "bcryptjs";
import { UserRole } from "../../config.js";

export const mockUser = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("123456", 10),
    // password: "123456",
    role: UserRole.ADMIN,
    nickName: "Mony"
  },
  {
    id: 2,
    username: "front-desk",
    password: bcrypt.hashSync("123456", 10),
    role: UserRole.FRONT_DESK,
    nickName: "Vothy"
  },
  {
    id: 3,
    username: "department",
    password: bcrypt.hashSync("123456", 10),
    role: UserRole.DEPARTMENT,
    nickName: "Minea"
  }
];