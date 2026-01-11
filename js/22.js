const puntaje = "10040";
 
if (puntaje == 1000) { // cual es la diferencia entre el doble igual y triple igual? el doble igual compara solo el valor, mientras que el triple igual compara valor y tipo de dato
    console.log("El puntaje es 1000");
}else { 
    console.log("El puntaje no es 1000");
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log("Puedes pagar");
} else {
    console.log("Fondos insuficientes");
}

const rol = "EDITOR";
if( rol === "EDITOR"){
    console.log("Tienes permisos de editor");
}else if( rol === "admin"){
    console.log("Tienes permisos de admin beibe");
}else{
    console.log("No tienes permisos");
}