//async /await
function descargarNuevosClientes(){
    return new Promise( resolve => {//una promesa ya tienes 2 estados, osea devuelve un resultado o no lo devuelve
        console.log('Descargando nuevos clientes ..espere..');
        setTimeout(() => {
            // console.log('Este codigo no está bloqueado2')
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
} 

function descargarUltimosPedidos(){
    return new Promise( resolve => {//una promesa ya tienes 2 estados, osea devuelve un resultado o no lo devuelve
        console.log('Descargando pedidos ..espere..');
        setTimeout(() => {
            // console.log('Este codigo no está bloqueado2')
            resolve('Los pedidos fueron descargados');
        }, 5000);
    });
} 
async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        mostrarClientes(resultado);
        console.log(resultado); 
    } catch (error) { //el parametro error puede tener cualquier nombre, este parametro hace que se capture el error en caso de que la promesa no se cumpla
        console.log(error);
    }
}; 
app(); 


function mostrarClientes( clientes){
    console.log(clientes+' Mostrar en pantalla');
}
// setInterval( function(){
//     console.log('set timeout..') 
// }, 3000); 