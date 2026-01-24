async function obtenerEmpleados() {
    const archivo = 'empledados.json'; //guardamos en un variable la ruta del archivo
    const resultado = await fetch(archivo); //fetch devuelve una promesa y await espera a que se resuelva y hace que el codigo no continue hasta que se resuelva
    console.log("no llega aqui hasta que fetch se resuelva");
    const datos = await resultado.json(); //convertimos la respuesta a json tipo casting
    console.log(datos);
}
obtenerEmpleados();  
