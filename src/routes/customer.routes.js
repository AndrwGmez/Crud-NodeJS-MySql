import { Router } from "express";
import {
  crear_usuario,
  eleminar_usuario,
  editar_usuario,
  Seleccion_Users,
  actulizar_usario,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", Seleccion_Users);
router.post("/add", crear_usuario);
router.get("/update/:id", editar_usuario);
router.post("/update/:id", actulizar_usario);
router.get("/delete/:id", eleminar_usuario);

export default router;
