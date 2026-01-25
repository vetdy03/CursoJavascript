//queryselector
const heading = document.querySelector('.header__texto h2'); // 0 or 1 elemento
console.log(heading);
heading.textContent = 'vetdy03 is the king';
heading.classList.add('Nueva_clase');

//query selectorall

const enlaces = document.querySelectorAll('.navegacion a'); // todos los elementos que coincidan
//console.log(enlaces);
enlaces[0].textContent = 'fue un nosotros';
// enlaces[0].remove();
enlaces[0].href = 'https://www.google.com';
enlaces[0].classList.remove('navegacion__enlace');


//getelementbyid casi ya no se usa
const heading2 = document.getElementById('heading2');
console.log('heading2');



//getelementbyclassname


//selecionar una clase con .
//por id con una numeral #
// si te equivocas en el nombre del selecto js te dira null en la consola 