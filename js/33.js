function obtenerEmpleados() {
    const archivo = 'empleados.json';
    fetch(archivo)
        .then(respuesta => {
            // console.log(respuesta);
            return respuesta.json();
        })
        .then(datos => {
            // console.log(datos);

            //console.log(datos.empleados);
            const { empleados } = datos; //destructuring 
            console.log(empleados);

            empleados.forEach( empleado => {
                console.log(empleado.puesto);

                document.querySelector('.contenido').textContent += empleado.nombre;
            })
        });

}
obtenerEmpleados();  


// DESESTRUCTURACIÓN
// const { empleados } = datos;
// ↑ Esto crea una NUEVA variable llamada 'empleados'
// que contiene SOLO el array de empleados