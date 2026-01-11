
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
    {nombre: 'Reloj inteligente', precio: 200},
];
 
// carrito.forEach(function(producto){
//     console.log("una veza por cada uno: "+ producto.nombre +" - precio: "+ producto.precio);
// });

carrito.forEach( producto => console.log("holi "+producto.precio));

//map 
arreglo2 = carrito.map( producto => console.log("holi"+producto.nombre));

//diferencia entre foreach y map
//foreach no retorna nada, solo itera
//map retorna un nuevo arreglo
const arreglo3 = carrito.map( producto => `${producto.nombre} - precio: ${producto.precio}` );

console.log(arreglo3);
console.log(arreglo3[2]);