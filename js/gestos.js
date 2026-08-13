let inicioX = 0;

const visorAlbum = document.getElementById("visorAlbum");

visorAlbum.addEventListener("touchstart", (e) => {

    inicioX = e.touches[0].clientX;

});

visorAlbum.addEventListener("touchend", (e) => {

    const finX = e.changedTouches[0].clientX;

    if (inicioX - finX > 50) {

        siguienteFoto();

    }

    if (finX - inicioX > 50) {

        anteriorFoto();

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        siguienteFoto();

    }

    if (e.key === "ArrowLeft") {

        anteriorFoto();

    }

});