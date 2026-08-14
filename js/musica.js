const cancionesAlbum = [

    // ÁLBUM 1 — Nuestros inicios
    [
        {
            archivo: "audio/album1-1.mp3",
            inicio: 35,
            duracion: 25
        },
        {
            archivo: "audio/album1-2.mp3",
            inicio: 45,
            duracion: 25
        }
    ],

    // ÁLBUM 2 — Nuestras aventuras
    [
        {
            archivo: "audio/album2-1.mp3",
            inicio: 40,
            duracion: 30
        },
        {
            archivo: "audio/album2-2.mp3",
            inicio: 50,
            duracion: 25
        }
    ],

    // ÁLBUM 3 — Momentos inolvidables
    [
        {
            archivo: "audio/album3-1.mp3",
            inicio: 35,
            duracion: 30
        }
    ]

];


const audio = new Audio();

let indiceCancion = 0;
let temporizadorMusica = null;


function reproducirMusica(indiceAlbum) {

    detenerMusica();

    indiceCancion = 0;

    reproducirCancion(indiceAlbum);
}


function reproducirCancion(indiceAlbum) {

    const canciones = cancionesAlbum[indiceAlbum];

    if (!canciones || indiceCancion >= canciones.length) {
        return;
    }

    const cancion = canciones[indiceCancion];

    audio.src = cancion.archivo;

    audio.volume = 0.20;

    audio.currentTime = cancion.inicio;

    audio.play().catch(() => {});

    temporizadorMusica = setTimeout(() => {

        indiceCancion++;

        reproducirCancion(indiceAlbum);

    }, cancion.duracion * 1000);
}


function detenerMusica() {

    clearTimeout(temporizadorMusica);

    temporizadorMusica = null;

    audio.pause();

    audio.currentTime = 0;

    audio.removeAttribute("src");

    audio.load();
}