const canciones = [
    "audio/FrutaFresca.mp3",
    "audio/Quiereme.mp3",
    "audio/Ojala.mp3"
];

const inicioCanciones = [
    9,  // Álbum 1 empieza en 0:35
    20,  // Álbum 2 empieza en 0:20
    17   // Álbum 3 empieza en 0:45
];

const volumenCanciones = [
    0.30, // Álbum 1
    0.12, // Álbum 2
    0.12  // Álbum 3
];

const duracionCanciones = [
    60,  // Álbum 1 → 60 segundos
    40,  // Álbum 2 → 75 segundos
    55   // Álbum 3 → 55 segundos
];

const musica = new Audio();

function reproducirMusica(indiceAlbum) {

    musica.src = canciones[indiceAlbum];

    musica.currentTime = inicioCanciones[indiceAlbum];

    musica.volume = volumenCanciones[indiceAlbum];

    musica.play();

}

function detenerMusica() {

    musica.pause();

    musica.currentTime = 0;

}