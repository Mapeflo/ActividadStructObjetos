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

    def setPromedio(self, nuevo_promedio: float):
        self.promedio = nuevo_promedio
        print(f"Promedio de {self.nombre} actualizado a {self.promedio}")

estudiante1 = Estudiante("María López", 20, 4.5)
estudiante2 = Estudiante("Carlos Ramírez", 22, 3.8)
estudiante3 = Estudiante("Ana Gómez", 19, 4.2)

estudiantes = [estudiante1, estudiante2, estudiante3]

print("ANTES DE LA MODIFICACIÓN:")
for est in estudiantes:
    est.mostrarInfo()

print("\nMODIFICANDO PROMEDIO:")

estudiante2.setPromedio(4.7)

print("\nDESPUÉS DE LA MODIFICACIÓN:")
for est in estudiantes:
    est.mostrarInfo()
