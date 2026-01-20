const usserAuth = new Promise ((resolve, reject) =>{
        const auth = true;

        if(auth){
            resolve('user autenticado');//el promise se cumple
        }else{
            reject('user no autenticado');//el promise no se cumple

        }
});

usserAuth
//     .then (function(result){
//         console.log(result);
//     }) 
//     .catch (function (error){
//         console.log(error); 
    // });

    .then (result => console.log(result))//eho con arrow function porque solo es una linea, ademas no necesitamos el return, lo que haces then es retornar el valor que tiene resolve, el arrow function lo recibe en result y lo muestra por consola
    .catch (error => console.log(error));

//en los promises exiten 3 valores
//pending -> No se ha cumplido ni se ha rechazado
//fulfilled -> Se ha cumplido
//rejected -> Se ha rechazado

//consumir un promise