const producto = {
    nombre: "Monitor de 20 Pulgadas", 
    precio: 300,
    disponible: true,
} 

const medidas = {
    peso : '1 kg',
    medida : '1m'
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
