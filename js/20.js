//metodos de propiedades y cadenas de texto
const reproductor = {
    reproducir : function(id){
        console.log("reproduciendo cancion con ID.. " + id);
    },
    pausar : function(){
        console.log("pausando cancion");
    
    },
    borrar : function(id){
        console.log("borrando cancion... " + id);
    },
    reproducirPlayList : function(nombre){
        console.log("reproduciendo playlist " + nombre);  
    }
}

reproductor.crearPlaylist = function(id){
    console.log("creando playlist " + id);  
}

//llamando al metodo
reproductor.reproducir(70);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("musica 1 a");

reproductor.reproducirPlayList("musica 3000");