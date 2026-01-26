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
// nuevoEnlace.classList.add('navegacion__enlace');

// console.log(nuevoEnlace);

//add to document
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//eventos
// console.log(1);
// window.addEventListener('load', function(){
//     console.log(2);
// });// esto es para que cargue todo, imagenes, scripts, css etc
// window.onload = function(){
//     console.log(3);
// }
// window.addEventListener('DOMContentLoaded', function(){ //solo espera que se cargue el html
//     console.log(17);
// })
// console.log(55);


// window.onscroll = function(){
//     console.log('scrolling...');
// }

//seleccionar elementos y asociarlos un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){//  como le pasa el evento se lo recibe como parametro
//     console.log(evento); //muestra todo el evento
//     evento.preventDefault(); //previene la accion por defecto del evento
    
    
    
    
//     console.log('enviando formulario');
// });



//eventos de los inputs y textarea, como es id usamos #

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerText);// console.log(eventito);
email.addEventListener('input', leerText);
mensaje.addEventListener('input', leerText);

//EL EVENTO DE SUBMIT 
formulario.addEventListener('submit', function(e){
    e.preventDefault();//previene la accion por defecto del evento y evita que se recargue la pagina

    //VALIDAR EL FORMULARIO

    //ENVIAR FORMULARIO
    
});

function leerText(e){
    // console.log(e.target.value);// para obtener el valor del input
    // console.log(e.target); // para obtener el elemento del input
    datos[e.target.id] = e.target.value; //llenar el objeto con los datos
    console.log(datos);
}


















 
//selecionar una clase con .
//por id con una numeral #
// si te equivocas en el nombre del selecto js te dira null en la consola 