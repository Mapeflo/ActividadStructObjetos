from dataclasses import dataclass

@dataclass
class Estudiante:
    nombre: str
    edad: int
    promedio: float

estudiante1 = Estudiante("María López", 20, 4.5)
estudiante2 = Estudiante("Carlos Ramírez", 22, 3.8)
estudiante3 = Estudiante("Ana Gómez", 19, 4.2)

print("Estudiante 1:", estudiante1)
print("Estudiante 2:", estudiante2)
print("Estudiante 3:", estudiante3)