//importamos las dependencias que necesitamos
import mongoose from "mongoose";

//crer funcion que nos conecte la base de datos

const conexionMongo =async() => {
    await mongoose.connect (process.env.BD_URL,{})
    
    //control de errores con try-catch
    
    try{
        console.log("Conexión exitosa"); 
    } catch(error){
        console.log ("error de conexión:", error.message)
    }
}
//tenemos que exportar nuestra función para llamarla desde el servidor 

export default conexionMongo;