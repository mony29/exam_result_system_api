import type { Route } from "../../types/index.js";
import loginAction from "./login.controller.js";

const loginRoute: Route = {
  '/login': [
    'login',
    [],
    { post: loginAction }
  ]
}

export default loginRoute;