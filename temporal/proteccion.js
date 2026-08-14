const claveCorrecta = "Mico";

const proteccion = document.getElementById("proteccion");
const contenidoPagina = document.getElementById("contenidoPagina");
const clave = document.getElementById("clave");
const entrar = document.getElementById("entrar");
const errorClave = document.getElementById("errorClave");

entrar.addEventListener("click", () => {

    if (clave.value === claveCorrecta) {

        proteccion.style.display = "none";
        contenidoPagina.style.display = "block";

        mostrarPantalla("sorpresa");

    } else {

        errorClave.textContent = "Contraseña incorrecta";

    }

});