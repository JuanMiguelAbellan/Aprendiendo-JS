// Crea un script para obtener la siguiente información, para probar usa el documento informacionDOM.html adjunto

// Número de párrafos que contiene el documento.
// Los 20 primeros caracteres del primer párrafo.
// El número de enlaces.
// La dirección a la que apunta el segundo enlace.
// La dirección a la que apunta el penúltimo enlace.
// El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”
// El número de enlaces que hay en el segundo párrafo.
// El número de enlaces hijos de un “p” que tenga color red

// La información la mostramos en un div#mostrarInformacion  al final del documento
// NOTA: Para resolver el ejercicio debes usar los métodos getElementById(), querySelector() y querySelectorAll(). 
// El método getElementsByTagName()  también existen pero recomendable con los indicados por ser más actuales y flexibles.

document.addEventListener("DOMContentLoaded", function(e){
    console.log(document.querySelectorAll("p").length);
    console.log(document.querySelector("p").textContent.slice(0, 21));
    console.log(document.querySelectorAll("a").length);
    console.log(document.querySelector(".resaltado").querySelector("a").getAttribute("href"));
    // let listaEnlaces= document.querySelectorAll("a");
    // for(let i =document.querySelectorAll("a").length; i>=0; i--){
    //     if(i==2){
    //         console.log(listaEnlaces[i].getAttribute("href"));
    //     }
    // }
    console.log(document.querySelector("img").closest("a").getAttribute("href"));
    console.log(document.querySelectorAll("a[href='https://www.cpifppiramide.com/']").length);
    console.log(document.querySelector(".resaltado").querySelectorAll("a").length)
    // let listaP= document.querySelectorAll("p[color=red]")
    // let listaA = listaP.querySelectorAll("a")
    // console.log(listaA.length);
    console.log(document.querySelector(".resaltado") );
    
})