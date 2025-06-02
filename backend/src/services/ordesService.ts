import pool from '../config/connectPG'
import { Order } from '../types/orders'
import { OrderItem } from '../types/orderItems'
import { Address } from '../types/Addresses'

export const getOrders = async (): Promise<Order[]> => {
  const query = 'SELECT orders.id, orders.status, orders.total_amount, orders.created_at, customers.id as idCustomers, customers.name as name, customers.email as email, customers.phone as phone, addresses.id as idAddress, addresses.street as street, addresses.city as city, addresses.state as state, addresses.zip_code as zipCode, addresses.country as country FROM public.orders JOIN customers ON customers.id  = orders.customer_id JOIN addresses ON addresses.id = orders.address_id;'
  const { rows } = await pool.query(query, [])
  return rows as Order[]
}

export const addOrder = async (order: Order): Promise<Order> => {
  const query = 'INSERT INTO orders (id ,customer_id, address_id, status, total_amount) VALUES ($1, $2, $3, $4, $5) RETURNING *;'
  const values = [order.id, order.customer_id, order.address_id, order.status, order.total_amount]
  const { rows } = await pool.query(query, values)
  return rows[0] as Order
}

export const addOrderItem = async (orderItem: OrderItem): Promise<OrderItem> => {
  const query = 'INSERT INTO order_items (id, order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;'
  const values = [orderItem.id, orderItem.order_id, orderItem.product_id, orderItem.quantity, orderItem.price]
  const { rows } = await pool.query(query, values)
  return rows[0] as OrderItem
}