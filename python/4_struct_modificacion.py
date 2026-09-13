from dataclasses import dataclass

@dataclass
class Estudiante:
    nombre: str
    edad: int
    promedio: float

estudiante1 = Estudiante("María López", 20, 4.5)
estudiante2 = Estudiante("Carlos Ramírez", 22, 3.8)
estudiante3 = Estudiante("Ana Gómez", 19, 4.2)

estudiantes = [estudiante1, estudiante2, estudiante3]

print("ANTES DE LA MODIFICACIÓN:")
for est in estudiantes:
    print(f"{est.nombre} - Promedio: {est.promedio}")

print()

for est in estudiantes:
    if est.nombre == "Carlos Ramírez":
        est.promedio = 4.7
        break

print("DESPUÉS DE LA MODIFICACIÓN:")
for est in estudiantes:
    print(f"{est.nombre} - Promedio: {est.promedio}")