import "dotenv/config";
import express from "express";
import cors from "cors";

import { registerRoutes } from "./register-routes.js";
import routes from "./routes/index.js";

const PORT = process.env.PORT ?? 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? "*";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: CORS_ORIGIN }));

app.use("/api", registerRoutes(routes));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;