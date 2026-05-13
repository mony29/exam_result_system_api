import { Router } from "express";
import type { HttpMethod, Route } from "./types/index.js";

export const registerRoutes = (routes: Route) => {
  const router = Router();

  Object.entries(routes).forEach(([path, config]) => {
    console.log('config', config);
    const [, middlewares, handlers] = config;

    Object.entries(handlers).forEach(([method, handler]) => {
      if (!handler) return;

      router[method as HttpMethod](
        path,
        ...middlewares,
        ...(Array.isArray(handler) ? handler : [handler])
      );
    });
  });

  return router;
}