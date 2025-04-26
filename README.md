# 🛒 Ecommerce Web App

Una plataforma de ecommerce moderna, escalable y totalmente funcional. Permite a los usuarios navegar productos, agregarlos al carrito y realizar pagos de forma segura. También incluye un panel de administración simple para la gestión de productos, usuarios y pedidos.

---

## ⚙️ Stack Tecnológico

### 🖥️ Frontend
- Next.js (React)
- Tailwind CSS
- Context API (manejo de estado)
- Fetch API

### 🛠️ Backend
- Node.js + Express
- PostgreSQL
- MongoDB
- JWT para autenticación
- Sequelize
- dotenv

---

## 🚀 Funcionalidades

### 👤 Usuarios
- Registro e inicio de sesión
- Navegación por catálogo de productos
- Filtros por categorías, búsqueda
- Carrito de compras persistente
- Checkout con pasarela de pago
- Historial de pedidos

### 🛠️ Admin
- Login seguro
- Panel para gestión de:
  - Productos (CRUD)
  - Pedidos
  - Usuarios

---

## 📁 Estructura del Proyecto

```bash
ecommerce-project/
├── backend/
│   ├── src/
│     ├── controllers/
│     ├── config/
│     ├── routes/
│     ├── models/
│     ├── middlewares/
│     ├── helpers/
│     └── server.js
│   ├── .env
├── frontend/
│   ├── src/
│     ├── controllers/
│     ├── config/
│     ├── context/
│     ├── hoc/
│     ├── layouts/
│     ├── pages/
│     ├── public/
│     ├── services/
│     ├── style/
│     ├── types/
│   ├── tailwind.config.js
└── README.md
