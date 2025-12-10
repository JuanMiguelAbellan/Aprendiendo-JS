//Crea un parrafo con un texto y que cada vez entres al parrafo cambie el color del texto de negro a rojo y viceversa al salir.
const parrafo = document.getElementById('parrafo');

parrafo.addEventListener("mouseenter", function(e){
    parrafo.style.color = "red";
})

parrafo.addEventListener("mouseleave", function(e){
    parrafo.style.color = "black";
})

