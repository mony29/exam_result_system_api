import { authMiddleware } from "../../middlewares/auth.middleware.js";
import type { Route } from "../../types/index.js";
import { getAction } from "./others.controller.js";

export default {
  '/others': [
    'others',
    [authMiddleware],
    { get: getAction }
  ]
} as Route;