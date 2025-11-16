//Haz un programa que pida un límite inferior y superior y genere un número entero  aleatorio entre ellos.
//El usuario debe adivinarlo, recibiendo pistas (“mayor” o “menor”) hasta acertar.
//Al final, muestra en el documento cuántos intentos ha necesitado.
let aleatorio = (Math.random() * (10-1) + 1);
let adivinado = false
let intentos = 0;
console.log(aleatorio);


while(!adivinado){
    intentos++
    let inferior = prompt("Dime el limite inferior: ");
    let superior = prompt("Dime el limite superior");

    if(inferior < aleatorio){
        alert("mayor")
    }else if(superior > aleatorio){
        alert("menor")
    }

    if(aleatorio > inferior && aleatorio < superior){
        alert("Has acertado con " +  intentos + " intentos");
        adivinado=true;
        break;
    }
}