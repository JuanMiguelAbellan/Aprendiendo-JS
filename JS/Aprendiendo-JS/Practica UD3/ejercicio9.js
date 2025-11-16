//Haz un juego en el que el usuario tenga que adivinar una letra  aleatoria del abecedario pulsando en el teclado 
// (No hay que introducirla en ningún campo de texto ni similar). 
// Indicándole mayor o menor según el orden alfabético en un párrafo en el documento.

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                    "j", "k", "l", "m", "n", "ñ", "o", "p", "q", 
                    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const letraAleatoria = abecedario[(Math.floor(Math.random() * abecedario.length ))]
console.log(letraAleatoria);

const parrafo = document.querySelector("#parrafo")

window.addEventListener("keydown", function(e){

    if(e.key == letraAleatoria){
        
        parrafo.innerHTML= "Has acertado la letra era: " + letraAleatoria
    }else if(e.key.charCodeAt(0) < letraAleatoria.charCodeAt(0) ){
        parrafo.innerHTML = "Menor que " + e.key
    }else if(e.key.charCodeAt(0) > letraAleatoria.charCodeAt(0) ){
        parrafo.innerHTML= "Mayor que " + e.key
    }
})