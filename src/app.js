import express from "express";
import path from "path";
import morgan from "morgan";

import customerRoutes from "./routes/customer.routes.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuaracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(customerRoutes);

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

// Iniciar Server
export default app;
