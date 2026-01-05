
function sumar( num1 = 0, num2 = 0){ //funcion con parametros
    console.log(num1 + num2);
}
sumar(2, 2);
sumar(10, 20);
sumar(30, 40);  
sumar(50);

//expresion de la funcion
const sumar2 = function(num1 = 0, num2 = 0){
    console.log(num1 + num2);
}
sumar2(3, 3);