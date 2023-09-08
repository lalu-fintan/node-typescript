import Admin from "@model/adminModel";
import { Request, Response } from "express";

export const getAdmin = async (req: Request, res: Response) => {
  const admin = await Admin.find();
  res.status(200).json(admin);
};
