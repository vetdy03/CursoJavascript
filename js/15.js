//array methods

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

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

//foreach
meses.forEach( function(mes) {
    if(mes == 'Marzo'){
        console.log('marzo si existe');
    }
});

//includes
const resultado = meses.includes('Diciembre'); // esto es para arreglos simples, hace que busque un valor en el arreglo
const resultado2 = meses.includes('Marzo');
console.log(resultado);
console.log(resultado2);

//some ideal para arreglos de objetos
const existe = carrito.some( function( producto ) {
    return producto.nombre === 'Celular';
    
} );
console.log(existe);

//reduce
const total = carrito.reduce( function( total, producto ){ return total + producto.precio; }, 0 ); //el 0 es el valor inicial
console.log(total);

//filter
const resultado3 = carrito.filter( function( producto ){
    return producto.precio < 400;
})
console.table(resultado3);
const resultado4 = carrito.filter( function( producto ){
    return producto.precio !== 200;
})
console.table(resultado4);

const resultado5 = carrito.filter( function( producto ){
    return producto.nombre == 'Celular';
})
console.table(resultado5);