import app from "./app.js";
import { port } from "./config.js";

app.listen(port);
console.log(`Servicio en el puerto ${port}`);
