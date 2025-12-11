from pathlib import Path
from time import ctime
import os
b = 13

# for _ in range(1, 10):
#     archivo = Path(F"ola/{b}.js")
#     archivo.write_text("// Archivo js numero " + str(b) + "\n")    
#     b += 1
#     # archivo.touch()
#     # os.utime(archivo, (os.path.getatime(archivo), os.path.getmtime(archivo) + a * 1000))
#     # print(F"Archivo: {archivo} - Fecha de modificacion: {ctime(os.path.getmtime(archivo))}")

# for _ in range(1, 10):
#     #eliminar archivos
#     archivo = Path(F"js/{b}.js")
#     archivo.unlink()
#     b += 1 
#     # archivo.touch()

for _ in range(13, 33):
    #crear archivos vacios
    archivo = Path(F"js/{b}.js")
    archivo.touch()
    b += 1