class Estudiante:
    def __init__(self, nombre: str, edad: int, promedio: float):
        self.nombre = nombre
        self.edad = edad
        self.promedio = promedio

    def mostrarInfo(self):
        print(f"Nombre: {self.nombre}")
        print(f"Edad: {self.edad}")
        print(f"Promedio: {self.promedio}")
        print("-" * 30)

estudiante1 = Estudiante("María López", 20, 4.5)
estudiante2 = Estudiante("Carlos Ramírez", 22, 3.8)
estudiante3 = Estudiante("Ana Gómez", 19, 4.2)

estudiantes = [estudiante1, estudiante2, estudiante3]

print("Se crearon 3 instancias de Estudiante y se guardaron en un arreglo.")
print(f"Total de estudiantes: {len(estudiantes)}")