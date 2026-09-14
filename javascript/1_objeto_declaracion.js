class Estudiante {
    constructor(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Promedio: ${this.promedio}`);
        console.log("-".repeat(30));
    }
}