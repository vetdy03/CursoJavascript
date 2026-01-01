//declaracion de funciones

function sumar(){
    console.log(2 + 2);
}
sumar();

//expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

//funcion con parametros
function sumar3(numero1, numero2){
    console.log(numero1 + numero2);
}
sumar3(10, 20);
sumar3(30, 40);


//IIFE - funcion que se ejecuta automaticamente
(function(){
    console.log('Ejecutando la funcion');
})();