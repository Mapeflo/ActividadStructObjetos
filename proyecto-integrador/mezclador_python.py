class Cancion:
    def __init__(self, titulo, artista, duracion, calificaciones_usuarios):
        self.titulo = titulo
        self.artista = artista
        self.duracion = duracion
        self.calificaciones_usuarios = calificaciones_usuarios 

    def mostrar_info(self):
        print(f"Título: {self.titulo}")
        print(f"Artista: {self.artista}")
        print(f"Duración: {self.duracion} min")
        print("Calificaciones de usuarios (matriz):")
        for fila in self.calificaciones_usuarios:
            print("  ", fila)
        print(f"Promedio de calificaciones: {self.promedio_calificaciones()}")
        print("-" * 45)

    def promedio_calificaciones(self):
        total = 0
        cantidad = 0
        for fila in self.calificaciones_usuarios:
            for nota in fila:
                total += nota
                cantidad += 1
        return round(total / cantidad, 2) if cantidad > 0 else 0


canciones = [
    Cancion("Bohemian Rhapsody", "Queen", 5.55, [
        [4.8, 4.9, 5.0],
        [4.7, 4.8, 4.9]
    ]),
    Cancion("Billie Jean", "Michael Jackson", 4.54, [
        [4.5, 4.6, 4.7],
        [4.4, 4.8, 4.9]
    ]),
    Cancion("Shape of You", "Ed Sheeran", 3.53, [
        [4.2, 4.3, 4.5],
        [4.0, 4.1, 4.4]
    ]),
    Cancion("Blinding Lights", "The Weeknd", 3.20, [
        [4.6, 4.7, 4.8],
        [4.5, 4.9, 5.0]
    ]),
    Cancion("Hotel California", "Eagles", 6.30, [
        [4.9, 5.0, 4.8],
        [4.7, 4.9, 4.8]
    ])
]

print("MEZCLADOR DE CANCIONES:")
print()

for cancion in canciones:
    cancion.mostrar_info()