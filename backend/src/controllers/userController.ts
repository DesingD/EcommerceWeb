import { getUsers } from "../services/userService";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const customers = await getUsers(); 
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}