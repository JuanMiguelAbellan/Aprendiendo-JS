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
    document.body.innerHTML += "<div id='mostrarInformacion'>"
    
    document.querySelector("#mostrarInformacion").innerHTML+="Número de párrafos que contiene el documento. " + document.querySelectorAll("p").length;
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "Los 20 primeros caracteres del primer párrafo. " + document.querySelector("p").textContent.slice(0, 21);
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "El número de enlaces. " + document.querySelectorAll("a").length;
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "La dirección a la que apunta el segundo enlace. " + document.querySelectorAll("a")[1].getAttribute("href");
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "La dirección a la que apunta el penúltimo enlace. " + document.querySelector("img").closest("a").getAttribute("href");
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "El numero de enlaces que apuntan a “https://www.cpifppiramide.com/” " + document.querySelectorAll("a[href='https://www.cpifppiramide.com/']").length;
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "El número de enlaces que hay en el segundo párrafo. " + document.querySelectorAll("p")[1].querySelectorAll("a").length;
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    document.querySelector("#mostrarInformacion").innerHTML+= "El número de enlaces hijos de un “p” que tenga color red " + document.querySelectorAll("p[color=red]");
    document.querySelector("#mostrarInformacion").innerHTML+= "<br>"
    
    document.body.innerHTML += "</div>"
})