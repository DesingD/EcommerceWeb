import { Router } from "express";
import { getOrdersController,getOrdersByIdController, addOrderController } from "../controllers/ordersController";

const router = Router();

router.get("/", (req, res) => {
  getOrdersController(req, res)
});

router.get("/:id", (req,res) => {
  getOrdersByIdController(req,res)
})

router.post("/create", (req, res) => {
  addOrderController(req, res);
})

export default router;