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