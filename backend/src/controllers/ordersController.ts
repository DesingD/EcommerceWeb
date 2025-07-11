import { Request, Response } from "express";
import { getOrders,getOrdersById, addOrder, addOrderItem, getOrderItems } from "../services/ordesService";
import { v4 as uuidV4 } from "uuid";

export const getOrdersController = async (req: Request, res:Response) => {
  try {
    const orders = await getOrders();
    const ordersWithItems = await Promise.all(orders.map(async (order) => {
      const orderItems = await getOrderItems(order.id);
      return {
        ...order,
        items: orderItems
      };
    }));
    
    return res.status(200).json(ordersWithItems);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const getOrdersByIdController = async (req: Request, res:Response) => {
  try {
    const{ id }= req.params
    const orders = await getOrdersById(id);
    const ordersWithItems = await Promise.all(orders.map(async (order) => {
      const orderItems = await getOrderItems(order.id);
      return {
        ...order,
        items: orderItems
      };
    }));
    
    return res.status(200).json(ordersWithItems);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const addOrderController = async (req: Request, res: Response) => {
  const data = req.body;
  
  try {
    const order = {
      id: uuidV4(), 
      customer_id: data.customer_id,
      address_id: data.address_id,
      status: data.status,
      total_amount: data.total_amount,
    };
    const newOrder = await addOrder(order);
    const orderId = newOrder.id; // Get the ID of the newly created order

    
      data.order_items.forEach(async (item: any) => {
        const orderItem = {
          id: uuidV4(), // Generate a unique ID for each order item
          order_id: orderId, // Associate the item with the new order
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        };
        await addOrderItem(orderItem); // Save each order item
      });
    

    return res.status(201).json({newOrder, message: "Order added successfully"});
  } catch (error) {
    console.error("Error adding order:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}