import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  export interface Request {
    user: any;
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokens: any = req.headers.token;

  try {
    if (!tokens) {
      res.status(401).json("you don't have a token");
    } else {
      let decoded: any = jwt.verify(tokens, process.env.SECRET_TOKEN || "");
      req.user = decoded;

      next();
    }
  } catch (err) {
    res.status(401).json("you are not authrized person");
  }
};
