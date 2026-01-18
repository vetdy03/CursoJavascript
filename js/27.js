//POO
//objeto literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio:200
}

//object constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente es ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
//crear funciones que solo se utilizan en los objetos en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio} y su disponibilidad es ${this.disponible}`;
}

const producto2 = new Producto('monitor curvo de 49"', 500, true);
const producto3 = new Producto('laptop hp', 800, false);

const cliente = new Cliente('Juande', 'Paz');

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


