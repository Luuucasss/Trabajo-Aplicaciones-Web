import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mi_pass",
  database: "mi_base"
});
pool.on("connect", () => {
  console.log("Conexión exitosa a la base de datos");
});

export default pool