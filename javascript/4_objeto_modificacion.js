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

    setPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
        console.log(`Promedio de ${this.nombre} actualizado a ${this.promedio}`);
    }
}

const estudiante1 = new Estudiante("María López", 20, 4.5);
const estudiante2 = new Estudiante("Carlos Ramírez", 22, 3.8);
const estudiante3 = new Estudiante("Ana Gómez", 19, 4.2);

const estudiantes = [estudiante1, estudiante2, estudiante3];

console.log("ANTES DE LA MODIFICACIÓN:");
estudiantes.forEach(est => est.mostrarInfo());

console.log("\nMODIFICANDO PROMEDIO:");

estudiante2.setPromedio(4.7);

console.log("\nDESPUÉS DE LA MODIFICACIÓN:");
estudiantes.forEach(est => est.mostrarInfo());