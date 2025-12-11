const producto = {
    nombre: "Monitor de 20 Pulgadas", 
    precio: 300,
    disponible: true,
}

//forma anterior
// const precio = producto.precio;
// const nombre = producto.nombre;

// console.log(precio);
// console.log(nombre);

//Destructuring
const {precio, nombre} = producto;

console.log(precio);
console.log(nombre);