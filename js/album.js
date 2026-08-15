    let albumActual = 0;
    let fotoActual = 0;

    const tituloAlbum = document.getElementById("tituloAlbum");
    const fotoAlbum = document.getElementById("fotoAlbum");
    const videoAlbum = document.getElementById("videoAlbum");
    const textoAlbum = document.getElementById("textoAlbum");
    const indicadores = document.getElementById("indicadores");


    function cargarFoto(){

        fotoAlbum.classList.add("ocultar");
        videoAlbum.classList.add("ocultar");
        document.querySelector(".mensaje-foto").classList.add("ocultar");

        const foto = albumesData[albumActual].fotos[fotoActual];

        tituloAlbum.textContent = albumesData[albumActual].titulo;

        if (foto.imagen) {

            const nuevaImagen = new Image();

            nuevaImagen.onload = () => {

                fotoAlbum.src = foto.imagen;
                fotoAlbum.classList.remove("ocultar");

            };

            nuevaImagen.src = foto.imagen;

            videoAlbum.pause();
            videoAlbum.removeAttribute("src");
            videoAlbum.load();
        }

        if (foto.video) {

            videoAlbum.src = foto.video;
            videoAlbum.muted = true;
            videoAlbum.volume = 0;

            videoAlbum.classList.remove("ocultar");

            fotoAlbum.removeAttribute("src");

        }

        textoAlbum.innerHTML = foto.mensaje.replace(/\n\s*\n/g, "<br><br>");

        if (typeof actualizarIndicadores === "function") {
            actualizarIndicadores();
        }

        document.querySelector(".mensaje-foto").classList.remove("ocultar");
    }
