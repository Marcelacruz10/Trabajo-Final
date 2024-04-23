// importar dependencias - lo que necesitamos para el funcionameinto del codigo

import usuarioModel from "../models/use.model.js";

/* peticiones
GET, me muestra mis usuarios
post crear usuario
put me modifica mis usuarios
delete e elimina usuarios*/
// prueba inicial
export const getUsuario =async(reg,res) =>{
    return res.send("funciona la peticion GET");
}

//LOGICA PARA CREAR USUARIO
export const postUsuario =async (reg,res) =>{
    return res.send("funciona la peticion POST");
}

//logica para modificar usuario
export const puttUsuario =async (reg,res) =>{
    return res.send("funciona la peticion Put");
}
//logica para delete
export const deletetUsuario =async (reg,res) =>{
    return res.send("funciona la peticion DELETE");
}
