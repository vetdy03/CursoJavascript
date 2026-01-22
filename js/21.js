
//Arrow functions y array methods

//array methods
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
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

//con function tradicional 
const sumar = function(n1, n2){
    console.log(n1 + n2);
}
sumar(7, 9); 
meses.forEach( function(mes){
    if (mes == 'Enero'){
        console.log('Enero si existe'); 
    }
})
//con arrow function
const sumar2 = (n1, n2) =>    console.log(n1 + n2);
sumar2(10, 20);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript XD');



//foreach
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('marzo si existe');
    }
});


resultado = carrito.some( producto => producto.nombre === 'Celular' ); //esto hace una busqueda y devuelve true o false
console.log(resultado);
