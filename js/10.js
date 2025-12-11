// const nombrePRECIO = "Monitor de 20 Pulgadas";
// const precioPRECIO = 300;
// const disponiblePRECIO = true;

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas", 
    precioProducto: 300,
    disponibleProducto: true,
}

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//eliminar propiedades
delete producto.precioProducto;
console.log(producto);
// console.log(producto.nombreProducto);
// console.log(producto.precioProducto);