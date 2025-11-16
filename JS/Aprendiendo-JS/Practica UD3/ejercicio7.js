//Crea un input tipo texto y que al salir del campo el contenido se pase a mayúsculas automáticamente.
const input = document.querySelector("input")

input.addEventListener("change", function(e){
    console.log(input.value.toUpperCase());
    
    input.value = input.value.toUpperCase();
})