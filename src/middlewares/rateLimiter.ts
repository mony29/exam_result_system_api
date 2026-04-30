import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per window
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests, please try again later."
  }
});