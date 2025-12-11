
"use strict"; //corre java script en mdo estricto
const producto = {
    nombre: "Monitor de 20 Pulgadas", 
    precio: 300,
    disponible: true,
} 
Object.freeze(producto);
producto.precio = 600; //no se puede modificar
delete producto.disponible; //no se puede eliminar
producto.imagen = "imagen.jpg";
console.log(Object.isFrozen(producto)); //true
console.log(producto);

//seal
Object.seal(producto); //no permite eliminar o agregar nuevas propiedades pero si modificar las existentes
