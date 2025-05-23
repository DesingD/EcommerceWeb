import { getUsers,  deleteUser, editUser, getUserById } from "../services/userService";
import { Request, Response } from "express";

import bcrypt from "bcrypt";
import { isValidEmail } from "../utils/emailValidate";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
  

    const customers = await getUsers(limit, offset); 
    res.status(200).json({page, limit, customers});
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

export const getUserByIdC = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const customer = await getUserById(id); 
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
}


export const deletedUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const customer = await deleteUser(id); 
    res.status(200).json({ message: "User deleted successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}

export const editedUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!req.body){
    return res.status(400).json({ message: "No data provided" });
  }

  if (req.body.password_hash) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password_hash, salt);
    req.body.password_hash = hashedPassword;
  }

  

  const data = req.body;

  if (!isValidEmail(data.email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const customer = await editUser(id, data); 
    res.status(200).json({ message: "User edited successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Error editing user", error });
  }
}

