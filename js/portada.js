const musicaCumple = new Audio("audio/cumple2.mp3");

const inicioCumple = 5;
const duracionCumple = 28;

btnSorpresa.addEventListener("click", () => {

    musicaCumple.volume = 0.40;

    musicaCumple.currentTime = inicioCumple;

    musicaCumple.play();

    setTimeout(() => {
        musicaCumple.pause();
        musicaCumple.currentTime = 0;
    }, duracionCumple * 1000);

    document.getElementById("sorpresa").classList.add("oculto");

    mostrarPantalla("inicio");
});
// const btnSorpresa = document.getElementById("btnSorpresa");

// const inicioCumple = 35;
// const duracionCumple = 25;

// const musicaCumple = new Audio("audio/Cumple.mp3");

// btnSorpresa.addEventListener("click", () => {

//     musicaCumple.volume = 0.80;

//     musicaCumple.play();

//     document.getElementById("sorpresa").classList.add("oculto");

//     mostrarPantalla("inicio");

// });

const fotosPortada = [

    "img/cumple/1.jpg",
    "img/cumple/2.jpg",
    "img/cumple/3.jpg",
    "img/cumple/4.jpg",
    "img/cumple/5.jpg",
    "img/cumple/6.jpg"
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

}, 1850);
