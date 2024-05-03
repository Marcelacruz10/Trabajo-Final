//importar las dependencias que necesitamos usar
import mongoose from 'mongoose';

const schema =mongoose.Schema; 

//creamos nuestor esquema de datos que es lo que vamos a guardar en nuesra base de datos
const usuarioSchema = new schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type:String,
        required: true
    },
    contrasena:{
        type:String,
        required:true
    }

});
//enviar plantlla (schema) a nuestra base de datos
//crear nuestro modelo

const usuarioModel = mongoose.model('usuario', usuarioSchema)

//Exportamos nuestor modelo

export default usuarioModel