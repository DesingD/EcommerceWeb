import pool from '../config/connectPG'
import { Order } from '../types/orders'
import { OrderItem } from '../types/orderItems'

export const getOrders = async (): Promise<Order[]> => {
  const query = 'SELECT orders.id, orders.status, orders.total_amount, orders.created_at, customers.id as idCustomers, customers.name as name, customers.email as email, customers.phone as phone, addresses.id as idAddress, addresses.street as street, addresses.city as city, addresses.state as state, addresses.zip_code as zipCode, addresses.country as country FROM public.orders JOIN customers ON customers.id  = orders.customer_id JOIN addresses ON addresses.id = orders.address_id;'
  const { rows } = await pool.query(query, [])
  return rows as Order[]
}

export const getOrdersById = async (idCustomers: string): Promise<Order[]> => {
  const query = 'SELECT orders.id, orders.status, orders.total_amount, orders.created_at, customers.id as idCustomers, customers.name as name, customers.email as email, customers.phone as phone, addresses.id as idAddress, addresses.street as street, addresses.city as city, addresses.state as state, addresses.zip_code as zipCode, addresses.country as country FROM public.orders JOIN customers ON customers.id  = orders.customer_id JOIN addresses ON addresses.id = orders.address_id where orders.customer_id = $1;'
  const { rows } = await pool.query(query, [idCustomers])
  return rows as Order[]
}
export const getOrderItems = async (idOrder: string): Promise<OrderItem[]> => {
  const query = 'SELECT public.order_items.id, public.order_items.order_id, public.order_items.product_id, public.order_items.quantity, public.order_items.price, products.name, products.description, products.price, products.image_url FROM public.order_items JOIN products ON products.id  = public.order_items.product_id where order_id = $1'
  const {rows} = await pool.query(query, [idOrder])
  return rows as OrderItem[];
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