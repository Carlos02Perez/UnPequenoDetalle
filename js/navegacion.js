const volverInicio = document.getElementById("volverInicio");
const volverAlbumes = document.getElementById("volverAlbumes");

function mostrarPantalla(idPantalla) {

    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("albumes").classList.add("oculto");
    document.getElementById("visorAlbum").classList.add("oculto");

    document.getElementById(idPantalla).classList.remove("oculto");

}
mostrarPantalla("inicio");


const btnAlbum = document.getElementById("btnAlbum");

const inicio = document.getElementById("inicio");

const albumes = document.getElementById("albumes");

btnAlbum.addEventListener("click", () => {

    mostrarPantalla("albumes");

});

const visor = document.getElementById("visorAlbum");

const albums = document.querySelectorAll(".album");

albums.forEach((album, indice) => {

    album.addEventListener("click", () => {

        albumActual = indice;

        fotoActual = 0;

        cargarFoto();

        mostrarPantalla("visorAlbum");

        reproducirMusica(indice);

    });

});
mostrarPantalla("inicio");


if (volverInicio) {
    volverInicio.addEventListener("click", () => {
        detenerMusica();
        mostrarPantalla("inicio");
    });
}

if (volverAlbumes) {
    volverAlbumes.addEventListener("click", () => {
        detenerMusica();
        mostrarPantalla("albumes");
    });
}

function siguienteFoto() {

    if (fotoActual < albumesData[albumActual].fotos.length - 1) {

        fotoActual++;

        cargarFoto();

    }

}

function anteriorFoto() {

    if (fotoActual > 0) {

        fotoActual--;

        cargarFoto();

    }

}

function actualizarIndicadores(){

    indicadores.innerHTML = "";

    albumesData[albumActual].fotos.forEach((_, indice) => {

        const punto = document.createElement("div");

        punto.classList.add("indicador");

        if(indice === fotoActual){

            punto.classList.add("activo");

        }

        indicadores.appendChild(punto);

    });

}
