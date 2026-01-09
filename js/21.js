

//arrow functions   
const sumar2 = (n1, n2) =>    console.log(n1 + n2);
sumar2(10, 20);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
const aprendiendo2 = tecnologia => {
    console.log(`Aprendiendo ${tecnologia}`);

}
aprendiendo('JavaScript XD');


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

//foreach
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('marzo si existe');
    }
});


//some ideal para arreglos de objetos
let resultado55;
resultado55 = carrito.some( producto => producto.nombre === 'Celular'); //retorna true o false cuando encuentra el elemento
console.log(resultado55);

//reduce hace una acumulacion
resultado55 = carrito.reduce( ( total, producto ) => total + producto.precio , 0 ); //el 0 es el valor inicial
console.log(resultado55);

//filter hace una busqueda y devuelve un nuevo arreglo
const resultado3 = carrito.filter( producto => producto.precio < 400);
console.table(resultado3);

const resultado4 = carrito.filter( producto => producto.precio !== 200 );

console.table(resultado4);

const resultado5 = carrito.filter( producto => producto.nombre !== 'Celular');
console.table(resultado5);