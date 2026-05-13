import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/ApiResponse.js";

type ValidateConfig = {
  properties: string[];
};

/**
 * Validates that required fields are present in req.body.
 * Fields listed without a suffix are required.
 * Uses `in` check so values like `0`, `false`, and `""` are accepted.
 */
const validate =
  ({ properties }: ValidateConfig) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log('req.body', req.body);
    const missingFields = properties.filter(
      (field) => !(field in req.body) || req.body[field] === undefined,
    );
    console.log('missingFields', missingFields);

    if (missingFields.length > 0) {
      res
        .status(400)
        .json(
          errorResponse(
            `Missing required fields: ${missingFields.join(", ")}`,
            missingFields,
          ),
        );
      return;
    }

    next();
  };

export default validate;