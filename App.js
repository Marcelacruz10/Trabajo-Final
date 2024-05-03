// importar las dependencias que vamos a usar//
import express from "express"; 
import path from "path"; 
import dotenv from "dotenv";
import conexionMongo from "./Src/config/basedatos.js";
import usuarioRouter from "./Src/routes/user.routes.js";
import cors from "cors";
// 2. configurar nuestro servidor
const app = express ();
const puerto = 9000;
app.use(cors());
//2.1. configurar  las variables de entorno
dotenv. config (); 

//2.2. configurar conexión base de datos
conexionMongo();

//  ejecutamos la función de conexión de nuestra base de datos

//2. establecer la conexión de front
// obtenemos la ruta absoluta de nuestra carpeta public
const rutaPublica = path.join(process.cwd(), "Public");

app.use(express.static(rutaPublica));
app.use(express.json());
app.use("/api",usuarioRouter);

app.get('/', (req,res) => {  
  res.sendFile(path.join(rutaPublica,"index.html"));
});

app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
})
