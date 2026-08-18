const musicaCumple = new Audio("audio/TuRegalo.mp3");

const inicioCumple = 11;
const duracionCumple = 300;

btnSorpresa.addEventListener("click", async () => {

    musicaCumple.volume = 0.70;
    musicaCumple.currentTime = inicioCumple;

    try {

        await musicaCumple.play();

        document.getElementById("sorpresa").classList.add("oculto");

        mostrarPantalla("inicio");

        setTimeout(() => {

            musicaCumple.pause();
            musicaCumple.currentTime = 0;

        }, duracionCumple * 1000);

    } catch (error) {

        console.log("El navegador bloqueó la reproducción:", error);

    }

});


const fotosPortada = [

    "img/cumple/1.jpg",
    "img/cumple/10.jpg",
    "img/cumple/14.jpg",
    "img/cumple/2.jpg",
    "img/cumple/3.jpg",
    "img/cumple/7.jpg",
    "img/cumple/12.jpg",
    "img/cumple/4.jpg",
    "img/cumple/13.jpg",
    "img/cumple/8.jpg",
    "img/cumple/5.jpg",
    "img/cumple/9.jpg",
    "img/cumple/15.jpg",
    "img/cumple/11.jpg"
];

fotosPortada.forEach((ruta) => {

    const imagen = new Image();

    imagen.src = ruta;

});

const fotoPrincipal = document.getElementById("fotoPrincipal");

let fotoPortadaActual = 0;

setInterval(() => {

    fotoPrincipal.classList.add("ocultar");

    setTimeout(() => {

        fotoPortadaActual++;

        if (fotoPortadaActual >= fotosPortada.length) {
            fotoPortadaActual = 0;
        }

        fotoPrincipal.src = fotosPortada[fotoPortadaActual];

        fotoPrincipal.classList.remove("ocultar");

    }, 250);

}, 1550);
