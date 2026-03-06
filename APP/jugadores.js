function cargarJugadores() {
    const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
    const lista = document.getElementById("lista");
    
    lista.innerHTML = "";

    jugadores.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.className = "player-item";
        
        li.innerHTML = `
            <span class="player-name">👤 ${nombre}</span>
            <button class="btn-delete" onclick="eliminarJugador(${index})">✕</button>
        `;
        
        lista.appendChild(li);
    });
}

function agregarJugador() {
    const input = document.getElementById("nombreJugador");
    const nombre = input.value.trim();

    if (nombre === "") return;

    let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
    jugadores.push(nombre);

    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    
    input.value = ""; // Limpiar input
    input.focus();
    
    cargarJugadores();
}

function eliminarJugador(index) {
    let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
    
    // Eliminar el elemento por su posición (index)
    jugadores.splice(index, 1);
    
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    cargarJugadores();
}