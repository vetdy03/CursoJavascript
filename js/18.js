const num1 = 20;
const num2 = "20";

console.log( num1 == num2 ); //compara solo el valor
console.log( num1 === num2 ); //compara valor y tipo
newNum= parseInt(num2); //convierte el string a entero y luego compara
console.log(newNum);
console.log( num1 === newNum ); //compara valor y tipo

//metodos para strings  
console.log( typeof num1.toString() ); //convierte un numero a string
newNunToString = num1.toString();
console.log( newNunToString );