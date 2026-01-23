from pathlib import Path
from time import ctime
import os

# Obtener ruta absoluta de la carpeta del script
script_dir = Path(__file__).parent.parent / "ola"
script_dir.mkdir(exist_ok=True)

# CREAR archivos
for b in range(1, 34):
    archivo = script_dir / f"{b}.js"
    archivo.write_text(f"// Archivo js numero {b}\n")
    print(f"Creado: {archivo}")

# ELIMINAR archivos (comentado, descomenta si lo necesitas)
# for b in range(1, 34):
#     archivo = script_dir / f"{b}.js"
#     if archivo.exists():
#         archivo.unlink()
#         print(f"Eliminado: {archivo}") 
    # archivo.touch()

# for _ in range(13, 33):
#     #crear archivos vacios
#     archivo = Path(F"js/{b}.js")
#     archivo.touch()
#     b += 1