//Importamos las dependencias
//rutas nos conectan con el font ( esta en el sevidor)-con logica

import express from "express";
import { getUsuario,postUsuario, puttUsuario, deletetUsuario } from "../controllers/use.controller.js";

//definir una variable que me contenga todas las rutas

const usuarioRouter= express.Router();

//definimos las rutas de forma especifica
//ruta para obtener usuario
usuarioRouter.get("/obtenerUsuario",getUsuario);

//ruta para crear usuarios

usuarioRouter.post("/crearUsuario",postUsuario);

//ruta para modificar usuarios por su ID
usuarioRouter.put("/modificarUsuario/:_id",puttUsuario);

//ruta para eliminar un usuario por su id
usuarioRouter.delete("/eliminarusuario/:_id",deletetUsuario);

//exportamos las rutas

export default usuarioRouter; 
