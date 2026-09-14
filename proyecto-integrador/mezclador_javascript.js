class Cancion {
    constructor(titulo, artista, duracion, calificaciones_usuarios) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
        this.calificaciones_usuarios = calificaciones_usuarios; 
    }

    mostrarInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Artista: ${this.artista}`);
        console.log(`Duración: ${this.duracion} min`);
        console.log("Calificaciones de usuarios:");
        this.calificaciones_usuarios.forEach(fila => {
            console.log("  ", fila);
        });
        console.log(`Promedio de calificaciones: ${this.promedioCalificaciones()}`);
        console.log("-".repeat(45));
    }

    promedioCalificaciones() {
        let total = 0;
        let cantidad = 0;
        for (let fila of this.calificaciones_usuarios) {
            for (let nota of fila) {
                total += nota;
                cantidad++;
            }
        }
        return cantidad > 0 ? (total / cantidad).toFixed(2) : 0;
    }
}

const canciones = [
    new Cancion("Bohemian Rhapsody", "Queen", 5.55, [
        [4.8, 4.9, 5.0],
        [4.7, 4.8, 4.9]
    ]),
    new Cancion("Billie Jean", "Michael Jackson", 4.54, [
        [4.5, 4.6, 4.7],
        [4.4, 4.8, 4.9]
    ]),
    new Cancion("Shape of You", "Ed Sheeran", 3.53, [
        [4.2, 4.3, 4.5],
        [4.0, 4.1, 4.4]
    ]),
    new Cancion("Blinding Lights", "The Weeknd", 3.20, [
        [4.6, 4.7, 4.8],
        [4.5, 4.9, 5.0]
    ]),
    new Cancion("Hotel California", "Eagles", 6.30, [
        [4.9, 5.0, 4.8],
        [4.7, 4.9, 4.8]
    ])
];

console.log("MEZCLADOR DE CANCIONES:");
console.log();

canciones.forEach(cancion => {
    cancion.mostrarInfo();
});