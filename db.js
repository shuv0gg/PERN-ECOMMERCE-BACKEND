import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export default pool;
pool
  .connect()
  .then(() => console.log("✅ PostgreSQL Connected Successfully"))
  .catch((err) => console.error("❌ Connection Error:", err))
  .finally(() => pool.end());
