
setInterval(() => {

    confetti({
        particleCount: 40,
        spread: 120,
        startVelocity: 45,
        scalar: 1.4, // Más grandes
        gravity: 0.8,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.3
        },
        colors: [
            "#FFD54F", // amarillo
            "#F4B400", // dorado
            "#FF6B6B", // coral
            "#7EC8E3", // azul claro
            "#8BC34A"  // verde suave
        ]
    });

}, 2500);
function explosionConfeti() {

    const cantidad = Math.floor(Math.random() * 15) + 20; // entre 20 y 35

    confetti({
        particleCount: cantidad,
        spread: 70 + Math.random() * 30,
        startVelocity: 30 + Math.random() * 10,
        scalar: 1.1,
        gravity: 0.9,
        ticks: 180,
        origin: {
            x: 0.15 + Math.random() * 0.7,
            y: 0.2 + Math.random() * 0.25
        },
        colors: [
            "#FFD54F",
            "#F4B400",
            "#FFE082",
            "#FFFFFF"
        ]
    });
}

explosionConfeti();
setInterval(explosionConfeti, 1500);