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

console.log("ANTES DE LA MODIFICACIÓN:");
estudiantes.forEach(est => {
    console.log(`${est.nombre} - Promedio: ${est.promedio}`);
});

console.log();

for (let est of estudiantes) {
    if (est.nombre === "Carlos Ramírez") {
        est.promedio = 4.7;
        break;
    }
}

console.log("DESPUÉS DE LA MODIFICACIÓN:");
estudiantes.forEach(est => {
    console.log(`${est.nombre} - Promedio: ${est.promedio}`);
});