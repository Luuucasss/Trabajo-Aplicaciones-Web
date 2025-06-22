import { Pool } from "pg";

const pool = new Pool({
    Host: "localhost",

    port: 5432,

    user: "postgres",

    password: "mi_pass",

    database: "mi_base"
})

export default pool