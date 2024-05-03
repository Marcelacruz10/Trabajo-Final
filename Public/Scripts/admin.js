//1. verificar conexion con html
console.log("Hola soy admin");

//funcion para obtener datos de la base de datos
const mostrarUsuarios = async () => {
    try {
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);

    } catch(error) {
        console.error("Error al obtener los usuarios", error);
    }
    //funcon para crear una fila en mi tabla por cada usuario
}
function mostrarTabla(usuarios) {
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = "";
    usuarios.forEarch(usuario => {
        //por cada usuario (forEach) usuario, me va a crear una fila en la tabla
        tabla.innerHTML += `
            <tr>
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button type="button" class="btn btn-danger"
                    id="${usuario._id}" onclick="eliminarUsuario(event)">
                    <i class="bi bi-trash"></i>
                    Eliminar
                    </button>
                </td>
            </tr>    
        `

    });
}
mostrarUsuarios();
//funciona para eliminar usuarios por id
function eliminarUsuario(event){
    console.log("Eliminar");

    const idUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar);

    fetch(`http://localhost:9000/api/eliminarusuario/${idUsuarioEliminar}`, {method:"DELETE"}).then(
            response => {
                if (!response.ok){
                    console.error("Error! no se pudo eliminar usuario");
                }else {
                    alert("Usuario eliminado correctamente");
                    mostrarUsuarios();
                }
            }).catch(error => {
                console.log("Error al eliminar el usuario", error);
            })
}
