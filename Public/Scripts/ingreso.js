//1. verificar conexion con hmtl

console.log("hola soy ingreso");

//crear funcion 

const iniciarSesion = async (event) => {
    event.preventDefault();
    //obtener los valores ingresados por el usuario
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    console.log(correo, contrasena);
    try {
        //2. realizar peticion GET a base de datos
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);

        //3. verificar si se encontró un usuario con el correo y la contraseña dados

        const esUsuarioRegistrado = usuarios.find(usuario =>
            usuario.correo == correo && usuario.contrasena == contrasena);
            if(esUsuarioRegistrado){

                //verificamos si es admin
                const correoAdmin ="admin-10@gmail.com";

                if(esUsuarioRegistrado.correo == correoAdmin ){
                    alert("hola administrador!");
                    window.location.href ="./admin.html"
                }else{
                    alert("ingreso exito");
                    window.location.href ="./index.html"
                }
            }else{
                alert("correo o contraseña incorrecta. Usuario no encontrado! Vuelve a intentar o registrate");
            }
            
    } catch (error) {
        console.error("error al verificar inicio de sesión", error);
    }

} 
