//async /await
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando nuevos clientes ..espere..');
        setTimeout(() => {
            // console.log('Este codigo no está bloqueado2')
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
        console.log('Este codigo no está bloqueado')
    } catch (error) { //el parametro error puede tener cualquier nombre, este parametro hace que se capture el error en caso de que la promesa no se cumpla
        console.log(error);
    }
}; 
app();

 
// setInterval( function(){
//     console.log('set timeout..')
// }, 3000);