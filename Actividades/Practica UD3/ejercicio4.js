//Mostrar un alert con la tecla que se ha pulsado. 
//Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl

window.addEventListener("keyup", function(e){

    // alert('Tecla pulsada: ' + e.key + "y has pulsado: " + e.shiftKey?"Shift" : e.ctrlKey?"Ctrl" : e.altKey?"Alt");
    if(e.shiftKey){
        alert("Tecla pulsada: " + e.key + " con shift")
    }else if(e.ctrlKey){
        alert("Tecla pulsada: " + e.key + " con crtl");
    }else if(e.altKey){
        alert("Tecla pulsada: " + e.key + " con alt");
    }else{
        alert("Tecla pulsada: " + e.key + " sola");
    }
})