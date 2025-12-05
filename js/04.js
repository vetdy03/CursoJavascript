//string o cadenas de texto
const producto = "monitor e 20 pulgada\" porque es el mejor"; //comillas dobles
const producto2 = String("monitor e 50 pulgadas");

//length
console.log(producto.length);
console.log(producto2);

//indexof
console.log(producto.indexOf("monitore")); //si no lo encuentra devuelve -1

//includes (ES6)
console.log(producto.includes("pulgada")); //devuelve true o false
console.log(producto.includes("tablet")); //devuelve true o false