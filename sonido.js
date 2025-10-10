const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar"),
    $botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("img/marry-you.mp3");
alert("Bienvenido a la invitación de Araceli y Julio César"+"\n"+"Dale Play ►")

$botonReproducir.onclick = () => {
    sonido.play();
};
$botonPausar.onclick = () => {
    sonido.pause();
};
