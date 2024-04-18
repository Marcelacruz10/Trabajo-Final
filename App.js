// importar las dependencias que vamos a usar//
import express from "express"; 
import path from "path"; 
import dotenv from "dotenv";



// 2. configurar nuestro servidor
const app = express ();
const puerto = 3000;

//2.1. configurar  las variables de entorno
dotenv. config (); 

//3. establecer la conexión de front



//4. inicializaos el servidor
app. listen (puerto, () => { 
console.log  (`El servidor está escuchando en http://localhost:${puerto}`); 
}); 
