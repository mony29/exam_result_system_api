import 'dotenv/config';
import express from 'express';
import { studentService } from './services/student.service.js';
import resultRoute from './routes/result.route.js';
import { apiLimiter } from './middlewares/rateLimiter.js';
import cors from 'cors';

const BASE_URL = "/api";
const app = express();
const PORT = process.env.PORT ?? 3001;
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";

// Enable CORS
app.use(
  cors({
    origin: FRONTEND_URL,
  })
)

// Load data before starting the server
studentService.loadData();

app.set("trust proxy", 1); // ADD Trust proxy for faking IP

app.use(BASE_URL, apiLimiter);
app.use(BASE_URL, resultRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})