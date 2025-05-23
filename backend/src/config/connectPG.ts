import { Pool } from 'pg';
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
  .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err));

export default pool;

