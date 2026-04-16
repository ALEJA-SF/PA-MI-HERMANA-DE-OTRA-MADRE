// CAMBIAR PANTALLAS
function cambiar(id) {
    document.querySelectorAll(".pantalla").forEach(p => p.classList.remove("activa"));
    document.getElementById(id).classList.add("activa");
}

// BOTONES
document.getElementById("btnInicio").onclick = function() {
    document.getElementById("musica").play();
    cambiar("mensaje");
};

document.getElementById("btnMensaje").onclick = function() {
    cambiar("motivacion");
};

document.getElementById("btnMotivacion").onclick = function() {
    cambiar("final");
};

// 🌼 GENERAR FLORES
const fondo = document.querySelector(".fondo");

for (let i = 0; i < 25; i++) {
    let flor = document.createElement("div");
    flor.classList.add("flor");
    flor.innerHTML = "🤑";

    flor.style.left = Math.random() * 100 + "%";
    flor.style.animationDuration = (10 + Math.random() * 10) + "s";
    flor.style.fontSize = (20 + Math.random() * 30) + "px";

    fondo.appendChild(flor);
}