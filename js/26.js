//this

const reservacion = {
    nombre: "vetdy03",
    apellido: "diaz",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} tiene un total de ${this.total} `);
    }  
}

reservacion.informacion();