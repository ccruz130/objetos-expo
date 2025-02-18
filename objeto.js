const jugador = {
    nombre: "LeBron James",
    edad: 39,
    equipo: "Los Angeles Lakers",
    puntosPorPartido: 25.0,
    
    actualizarPuntos: function(nuevosPuntos) {
        this.puntosPorPartido = nuevosPuntos;
        console.log(`Puntos por partido actualizados a: ${this.puntosPorPartido}`);
    }
};


jugador.actualizarPuntos(27.5);
console.log(jugador);