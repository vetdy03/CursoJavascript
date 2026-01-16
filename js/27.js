//POO
const metodoPago = 'tarjeta';

switch (metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'bitcoin':
        console.log('pagaste con bitcoin');
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default:
        console.log('aun no has pagado');
        break;
}
