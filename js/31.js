//NOTIFICACION 
const boton = document.querySelector('#botonParaVerNotifcacion') 
boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then( resultado => console.log(`El resultado es ${resultado}`) )
    // console.log('clickando');
})

if(Notification.permission === 'granted'){
    new Notification('Esta es la notificacion', {
        icon: 'img/ccj.png',
        body: 'Esto fue echo por vetdy03'
    })
}