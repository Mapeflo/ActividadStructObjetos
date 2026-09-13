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

print("LISTA DE ESTUDIANTES:")
print()

for i, est in enumerate(estudiantes, start=1):
    print(f"{i}. Nombre: {est.nombre}")
    print(f"   Edad: {est.edad}")
    print(f"   Promedio: {est.promedio}")
    print()
