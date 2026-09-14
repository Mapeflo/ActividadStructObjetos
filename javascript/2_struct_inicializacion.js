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

console.log("Estudiante 1:", estudiante1);
console.log("Estudiante 2:", estudiante2);
console.log("Estudiante 3:", estudiante3);