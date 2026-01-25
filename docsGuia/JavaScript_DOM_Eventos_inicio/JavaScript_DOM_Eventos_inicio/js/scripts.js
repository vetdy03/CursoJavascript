//queryselector
const heading = document.querySelector('.header__texto h2'); // 0 or 1 elemento
// console.log(heading);
// heading.textContent = 'vetdy03 is the king';
// heading.classList.add('Nueva_clase');

//query selectorall

const enlaces = document.querySelectorAll('.navegacion a'); // todos los elementos que coincidan
//console.log(enlaces);
// enlaces[0].textContent = 'fue un nosotros';
// enlaces[0].remove();
// enlaces[0].href = 'https://www.google.com';
// enlaces[0].classList.remove('navegacion__enlace');


//getelementbyid casi ya no se usa
const heading2 = document.getElementById('heading2');
// console.log('heading2');

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
// console.log(nuevoEnlace);

//add el href
nuevoEnlace.href = 'nuevo-enlace.html';
//add el text
nuevoEnlace.textContent = 'Nuevo enlace';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

console.log(nuevoEnlace);

//add to document
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//getelementbyclassname


//selecionar una clase con .
//por id con una numeral #
// si te equivocas en el nombre del selecto js te dira null en la consola 