//Mostrar un alert con la tecla que se ha pulsado. 
//Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl

window.addEventListener("keydown", function(e){
    if(e.shiftKey){
        document.getElementById("parrafo").innerHTML = "Tecla pulsada: " + e.key + " con shift"
    }else if(e.ctrlKey){
        document.getElementById("parrafo").innerHTML = "Tecla pulsada: " + e.key + " con Crtl"
    }else if(e.altKey){
        document.getElementById("parrafo").innerHTML = "Tecla pulsada: " + e.key + " con Alt"
    }else{
        document.getElementById("parrafo").innerHTML = "Tecla pulsada: " + e.key + " sola"
    }
})