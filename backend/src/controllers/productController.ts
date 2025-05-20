import { getProducts, addProduct, deleteProduct, editProduct, getProductById } from "../services/productService";
import { Request, Response } from "express";
import {v4 as uuidv4} from "uuid";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
  

    const products = await getProducts(limit, offset); 
    res.status(200).json({page, limit, products});
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
}

export const getProductByIdP = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id); 
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
}

export const aggProduct = async (req: Request, res: Response) => {
  let newId = uuidv4();
  req.body.id = newId;

  const data = req.body;

  try {
    const product = await addProduct(data); 
    res.status(201).json({ message: "Aggregation successful", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
}

export const deletedProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await deleteProduct(id); 
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
}

export const editedProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!req.body){
    return res.status(400).json({ message: "No data provided" });
  }

  const data = req.body;

  try {
    const product = await editProduct(id, data); 
    res.status(200).json({ message: "Product edited successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error editing product", error });
  }
}