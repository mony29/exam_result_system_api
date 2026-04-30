import express from 'express';
import { studentService } from './services/student.service.js';
import resultRoute from './routes/result.route.js';
import { apiLimiter } from './middlewares/rateLimiter.js';

const BASE_URL = "/api";
const app = express();
const port = 3000;

// Load data before starting the server
studentService.loadData();

app.set("trust proxy", 1); // ADD Trust proxy for faking IP

app.use(BASE_URL, apiLimiter);
app.use(BASE_URL, resultRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})