const volverInicio = document.getElementById("volverInicio");
const volverAlbumes = document.getElementById("volverAlbumes");

function mostrarPantalla(idPantalla) {

    document.getElementById("sorpresa").classList.add("oculto");
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("albumes").classList.add("oculto");
    document.getElementById("visorAlbum").classList.add("oculto");

    document.getElementById(idPantalla).classList.remove("oculto");
}
// mostrarPantalla("inicio");


const btnAlbum = document.getElementById("btnAlbum");

const inicio = document.getElementById("inicio");

const albumes = document.getElementById("albumes");

btnAlbum.addEventListener("click", () => {

    musicaCumple.pause();
    musicaCumple.currentTime = 0;

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

        musicaCumple.currentTime = inicioCumple;
        musicaCumple.volume = 0.40;
        musicaCumple.play().catch(() => {});

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

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        // Pausar música de los álbumes
        pausarMusicaPorSalida();

        // Pausar música de cumpleaños
        musicaCumple.pause();

        // Detener confeti
        detenerConfeti();

    } else {

        // Reanudar música de los álbumes
        reanudarMusicaPorRegreso();

        // Reanudar confeti
        iniciarConfeti();

        // Reanudar música de cumpleaños solamente en el inicio
        const inicio = document.getElementById("inicio");

        if (!inicio.classList.contains("oculto")) {

            musicaCumple.play().catch(() => {});

        }

    }

});
// document.addEventListener("visibilitychange", () => {

//     if (document.hidden) {

//         // Pausar música
//         pausarMusicaPorSalida();

//         // Detener nuevos efectos
//         detenerConfeti();

//     } else {

//         // Reanudar música
//         reanudarMusicaPorRegreso();

//         // Reanudar efectos
//         iniciarConfeti();

//     }

// });
