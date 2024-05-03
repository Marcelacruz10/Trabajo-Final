// 1.verificar conexión con html
console.log("Hola soy registro")
// 2. crear funcion para registro
//2.1 obtener los datos de mi formulario
const registrarusuario = async (event) => {
    event.preventDefault();
    const nombrecompleto = document.getElementById("nombrecompleto").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    console.log( nombrecompleto, correo, contrasena);
    //2.2. crear un objeto con los datos del usuario
    const datosUsuario = {
        nombrecompleto,
        correo,
        contrasena
    }
    console.log(datosUsuario);

    //2.3 hacer la peticion post para crear usuario en nuestra base de datos

    try {
        const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
            {
                method: "POST",
                headers: {"Content-Type":"application/json" },
                body: JSON.stringify(datosUsuario)
            }
        );
        const nuevoUsuario = await respuesta.json();
        console.log("Usuario creado exitosamente", nuevoUsuario)

        //condicional para redireccionar a ingreso.html

        if(nuevoUsuario){
            alert("Registro exitoso!");
            window.location.href = "./ingreso.html"
        } else{
            alert("Ups! error de registro, intentélo nuevamente");
        }
    } catch (error) {
        console.error("error al registrar usuario", error);

    }
} 
