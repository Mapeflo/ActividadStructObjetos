class Estudiante {
    constructor(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
}

const estudiante1 = new Estudiante("María López", 20, 4.5);
const estudiante2 = new Estudiante("Carlos Ramírez", 22, 3.8);
const estudiante3 = new Estudiante("Ana Gómez", 19, 4.2);

const estudiantes = [estudiante1, estudiante2, estudiante3];

console.log("LISTA DE ESTUDIANTES:");
console.log();

estudiantes.forEach((est, index) => {
    console.log(`${index + 1}. Nombre: ${est.nombre}`);
    console.log(`   Edad: ${est.edad}`);
    console.log(`   Promedio: ${est.promedio}`);
    console.log();
});