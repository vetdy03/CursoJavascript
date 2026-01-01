//arreglso o arrays

const nums = [ 10, 20, 30, 40, 50 ];
console.table(nums);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ['hola', 10, true, 'si', null, {nombre: 'juan', trabajo: 'desarrollador'}, [1,2,3]];
console.log(arreglo);
console.table(arreglo);

//acceder a los valores de un arreglo
console.log(nums[0]);
console.log(nums[3]);

//acceder al length
console.log(nums.length);

//recorrer un arreglo
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

//forEach
nums.forEach( function( numero ) {
    console.log( numero );
    console.log( numero * 2 );
} );

// nums[5] = 60; //agrega un nuevo elemento al arreglo
//nums.push(70); //agrega un nuevo elemento al final del arreglo

nums.unshift(0); //agrega al inicio del arreglo

//algunos metodos para eliminar elementos de un arreglo
nums.pop(); //elimina el ultimo elemento del arreglo
nums.shift(); //elimina el primer elemento del arreglo

//splice para eliminar o agregar elementos en cualquier posicion
//nums.splice(2, 1); //elimina el elemento en la posicion 2
//nums.splice(2, 0, 25); //agrega el elemento 25 en la posicion 2
nums.splice(4, 1, 35); //reemplaza el elemento en la posicion 4 por 35
console.table(nums);