import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "andrwpass",
  port: 3306,
  database: "db_custom",
});