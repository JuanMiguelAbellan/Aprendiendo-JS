//Mostrar un texto en un párrafo con las dimensiones de la ventana cada vez que es redimensionada.

window.addEventListener("resize", function(e){
    document.getElementById("parrafo").innerHTML = "Alto: " + window.innerHeight + "\nAncho: " + window.innerWidth
})