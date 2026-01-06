
function sumar( n1, n2){ //funcion con parametros
    return n1 + n2;
}
const res = sumar(9, 3);
console.log(res);

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}


function calcularImpuesto(total){
    return total * 1.15;
}
//validar formulario 

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total);

const totalPagar = calcularImpuesto(total);
console.log('total a pagar con impuesto es: ' + totalPagar);
console.log(`total a pagar con impuesto es: ${totalPagar}`);