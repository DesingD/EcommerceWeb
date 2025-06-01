import { Router } from "express";
import { getOrdersController, addOrderController } from "../controllers/ordersController";

const router = Router();

router.get("/", (req, res) => {
  getOrdersController(req, res)
});

router.post("/create", (req, res) => {
  addOrderController(req, res);
})

export default router;