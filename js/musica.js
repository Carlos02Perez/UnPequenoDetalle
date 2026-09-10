const cancionesAlbum = [

    // ÁLBUM 1 — Nuestros inicios
    [
        {
            archivo: "audio/TeEncontre.mp3",
            inicio: 18,
            duracion: 48
        },
        {
            archivo: "audio/EresMiSueno.mp3",
            inicio: 36,
            duracion: 34
        },
        {
            archivo: "audio/SimplesCorazones.mp3",
            inicio: 40,
            duracion: 51
        },
        {
            archivo: "audio/FrutaFresca.mp3",
            inicio: 42,
            duracion: 31
        },
        {
            archivo: "audio/TeQuiero.mp3",
            inicio: 31,
            duracion: 61
        }
    ],

    // ÁLBUM 2 — Nuestras aventuras
    [
        {
            archivo: "audio/TeMandoFlores.mp3",
            inicio: 9,
            duracion: 77
        },
        {
            archivo: "audio/SalirConVida.mp3",
            inicio: 3,
            duracion: 65
        },
        {
            archivo: "audio/Quiereme.mp3",
            inicio: 20,
            duracion: 96
        },
        {
            archivo: "audio/ComoYo.mp3",
            inicio: 45,
            duracion: 21
        }
    ],

    // ÁLBUM 3 — Momentos inolvidables
    [
        {
            archivo: "audio/Arroyito.mp3",
            inicio: 10,
            duracion: 35
        },
        {
            archivo: "audio/Ojala.mp3",
            inicio: 17,
            duracion: 39
        },
        {
            archivo: "audio/BesosEnGuerra.mp3",
            inicio: 27,
            duracion: 48
        },
        {
            archivo: "audio/CuandoNadieVe.mp3",
            inicio: 34,
            duracion: 62
        }
    ]

];


const audio = new Audio();

let indiceCancion = 0;
let albumActualMusica = null;
let temporizadorMusica = null;

let musicaPausada = false;
let tiempoInicioTemporizador = null;
let tiempoRestante = null;

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

    tiempoRestante = cancion.duracion * 1000;
    tiempoInicioTemporizador = Date.now();

    temporizadorMusica = setTimeout(() => {

        indiceCancion++;

        if (indiceCancion >= canciones.length) {
            indiceCancion = 0;
        }

        reproducirCancion();

    }, tiempoRestante);
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

function pausarMusicaPorSalida() {

    if (audio.paused) {
        return;
    }

    audio.pause();

    const tiempoTranscurrido = Date.now() - tiempoInicioTemporizador;

    tiempoRestante -= tiempoTranscurrido;

    if (tiempoRestante < 0) {
        tiempoRestante = 0;
    }

    clearTimeout(temporizadorMusica);

    temporizadorMusica = null;
}

function reanudarMusicaPorRegreso() {

    if (!albumActualMusica === null) {
        return;
    }

    if (audio.src && audio.paused) {

        audio.play().catch(() => {});

        tiempoInicioTemporizador = Date.now();

        temporizadorMusica = setTimeout(() => {

            indiceCancion++;

            const canciones = cancionesAlbum[albumActualMusica];

            if (indiceCancion >= canciones.length) {
                indiceCancion = 0;
            }

            reproducirCancion();

        }, tiempoRestante);
    }
}