//clases 


class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    getPrecio(){
        return this.precio;
    }
}

const producto2 = new Producto('monitor curvo de 49"', 500);
const producto3 = new Producto('laptop hp', 7000);

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;

    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}
const libro = new Libro('Javascript', 150, 'asd3232322');


console.log(libro.formatearProducto());
console.log(producto2);
console.log(producto3);