let intervaloConfeti1;
let intervaloConfeti2;

function iniciarConfeti() {

    intervaloConfeti1 = setInterval(() => {

        confetti({
            particleCount: 40,
            spread: 120,
            startVelocity: 45,
            scalar: 1.4,
            gravity: 0.8,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.3
            },
            colors: [
                "#FFD54F",
                "#F4B400",
                "#FF6B6B",
                "#7EC8E3",
                "#8BC34A"
            ]
        });

    }, 2500);


    intervaloConfeti2 = setInterval(explosionConfeti, 1500);
}


function detenerConfeti() {

    clearInterval(intervaloConfeti1);
    clearInterval(intervaloConfeti2);

}


function explosionConfeti() {

    const cantidad = Math.floor(Math.random() * 15) + 20;

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
iniciarConfeti();

