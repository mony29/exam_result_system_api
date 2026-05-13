import loginRoute from "../services/login/index.js";
import userRoute from "../services/user/index.js";
import othersRoute from "../services/others/index.js";
import type { Route } from "../types/index.js";

const routes: Route = {
  ...loginRoute,
  ...userRoute,
  ...othersRoute,
};

export default routes;