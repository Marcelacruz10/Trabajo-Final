// importar dependencias - lo que necesitamos para el funcionameinto del codigo

import usuarioModel from "../models/use.model.js";

/* peticiones
GET, me muestra mis usuarios
post crear usuario
put me modifica mis usuarios
delete e elimina usuarios*/
// prueba inicial
export const getUsuario =async(req,res) =>{

//manejo de error con try y catch
try{
    let usuarios =await usuarioModel.find();
    return res.send(usuarios);
}catch(error){
    return res.json({error: "error al mostrar los datos" + error})     
}
}

//LOGICA PARA CREAR USUARIO
export const postUsuario =async (req,res) =>{
    try{
        let datosUsuario =req.body; 
        let nuevoUsuario= await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);
    
    }catch(error){
        return res.json({error: "error al crear usuario",
        message:error.message})
}
}
//logica para modificar usuario
export const puttUsuario =async (req,res) =>{
    try{
        let datosModificar = req.body;
        let idModificar = req.params,_id;
        await usuarioModel.findByIdAndUpdate (idModificar,datosModificar);
        return res.json({message: "usuario actualizado correctamente"})
    }catch(error){
        return res.json({error: "error al modificar usuario", 
        message: error.message});
      }    
}
//logica para delete
export const deletetUsuario =async (req,res) =>{
    try{
        let idEliminar =req.params,_id;
        let usuarioEliminado =await usuarioModel.findByIdAndDelete(idEliminar);
        if(usuarioEliminado){
            return res.json({message: "usuario eliminado correctaemnte"});
        } else {
            returnres.json ({message: "error al eliminar el usuario"});
        }
    }catch(error){
        return res.json({error: "error al modificar usuario", 
        message: error.message});
      }    
}