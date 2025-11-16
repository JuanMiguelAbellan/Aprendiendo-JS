// El programa pedirá al usuario cuántos segundos quiere contar.
// Debe mostrar cada segundo en el documento algo como:
// Faltan X segundos...
// Cuando llegue a 0, mostrará un mensaje de alerta ("¡Tiempo terminado!") y dejará de contar.

const segundos= parseInt(prompt("Dime cuantos segundos queires contar"));

// setTimeout(mostrar, segundos*1000, segundos--)

// function mostrar(segundosRestantes){
//     if(segundosRestantes <=0 ){
//         alert("Tiempo terminado")
//     }else{
//         document.getElementById("parrafo").innerHTML="Faltan " + segundosRestantes;
//     }
// }
for(let i =segundos; i >=0 ; i--){
    setTimeout(() => {
        console.log("Faltan " + i);
    }, 1000);
}

