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
