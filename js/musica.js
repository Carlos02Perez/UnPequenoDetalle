const cancionesAlbum = [

    // ÁLBUM 1 — Nuestros inicios
    [
        {
            archivo: "audio/TeQuiero.mp3",
            inicio: 31,
            duracion: 31
        },
        {
            archivo: "audio/FrutaFresca.mp3",
            inicio: 33,
            duracion: 31
        }
    ],

    // ÁLBUM 2 — Nuestras aventuras
    [
        {
            archivo: "audio/SalirConVida.mp3",
            inicio: 3,
            duracion: 65
        },
        {
            archivo: "audio/Quiereme.mp3",
            inicio: 87,
            duracion: 50
        }
    ],

    // ÁLBUM 3 — Momentos inolvidables
    [
        {
            archivo: "audio/Ojala.mp3",
            inicio: 18,
            duracion: 37
        }
    ]

];


const audio = new Audio();

let indiceCancion = 0;
let albumActualMusica = null;
let temporizadorMusica = null;


function reproducirMusica(indiceAlbum) {

    detenerMusica();

    albumActualMusica = indiceAlbum;
    indiceCancion = 0;

    reproducirCancion();
}


function reproducirCancion() {

    const canciones = cancionesAlbum[albumActualMusica];

    if (!canciones) {
        return;
    }

    const cancion = canciones[indiceCancion];

    audio.pause();

    audio.src = cancion.archivo;

    audio.volume = 0.20;

    audio.currentTime = cancion.inicio;

    audio.play().catch(() => {});


    clearTimeout(temporizadorMusica);

    temporizadorMusica = setTimeout(() => {

        indiceCancion++;

        // Cuando llega a la última canción,
        // vuelve nuevamente a la primera.
        if (indiceCancion >= canciones.length) {
            indiceCancion = 0;
        }

        reproducirCancion();

    }, cancion.duracion * 1000);
}


function detenerMusica() {

    clearTimeout(temporizadorMusica);

    temporizadorMusica = null;

    audio.pause();

    audio.currentTime = 0;

    audio.removeAttribute("src");

    audio.load();

    albumActualMusica = null;
    indiceCancion = 0;
}