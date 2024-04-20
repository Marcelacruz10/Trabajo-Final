// importar las dependencias que vamos a usar//
import express from "express"; 
import path from "path"; 
import dotenv from "dotenv";



// 2. configurar nuestro servidor
const app = express ();
const puerto = 3000;

//2.1. configurar  las variables de entorno
dotenv. config (); 
//  ejecutamos la función de conexión de nuestra base de datos

//2. establecer la conexión de front
// obtenemos la ruta absoluta de nuestra carpeta public
const publicPath = path.join(process.cwd(), "Public");

app.use(express.static(publicPath));

app.use(express.json());
app.use('/api', usuarioRouter);

app.get('/', (req, res) => {
    
  res.sendFile(path.join(publicPath, "index.html"));
});


app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
  });