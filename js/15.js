//arreglso o arrays

const nums = [ 10, 20, 30, 40, 50 ];


const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

// nums[5] = 60; //agrega un nuevo elemento al arreglo
//nums.push(70); //agrega un nuevo elemento al final del arreglo

nums.unshift(0); //agrega al inicio del arreglo

//algunos metodos para eliminar elementos de un arreglo
nums.pop(); //elimina el ultimo elemento del arreglo
nums.shift(); //elimina el primer elemento del arreglo

//splice para eliminar o agregar elementos en cualquier posicion
// nums.splice(2, 1); //elimina el elemento en la posicion 2
// nums.splice(2, 0, 25); //agrega el elemento 25 en la posicion 2
// nums.splice(4, 1, 35); //reemplaza el elemento en la posicion 4 por 35
console.table(nums);