
function sumar( num1 = 0, num2 = 0){ //funcion con parametros
    console.log(num1 + num2);
}
sumar(2, 2);
sumar(100, 200);
sumar(300, 400);  
sumar(500);

//expresion de la funcion
const sumar2 = function(num1 = 5, num2 = 5){
    console.log(num1 + num2);
}
sumar2(3, 8);