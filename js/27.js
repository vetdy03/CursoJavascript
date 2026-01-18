//POO
//objeto literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio:200
}

//object constructor
function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('monitor curvo de 49"', 500, true);
const producto3 = new Producto('laptop hp', 800, false);
console.log(producto2);