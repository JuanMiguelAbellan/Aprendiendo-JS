//Muestra en un párrafo de documento las coordenadas actualizadas en las que se encuentra el ratón cada vez que se mueva.

window.addEventListener("mousemove", function(e){
    document.getElementById("parrafo").innerHTML = "X: "+e.clientX+"\nY: "+e.clientY
})