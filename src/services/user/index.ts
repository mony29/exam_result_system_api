import { authMiddleware } from "../../middlewares/auth.middleware.js";
import type { Route } from "../../types/index.js";
import { getUserAction } from "./user.controller.js";

export default {
  '/users': [
    'users',
    [authMiddleware],
    { get: getUserAction }
  ]
} as Route;