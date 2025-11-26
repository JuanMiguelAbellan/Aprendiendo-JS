// Tomando como base el documento adjunto listaDOM.html crea un script js para que el botón “añadirLista” nos cree una nueva Lista NO ordenada vacía . 
// La nueva lista se debe crear en un section nuevo que se encontrará dentro del main del HTML.
// Cada lista creada debe tener una cabecera con el nombre de la lista que nos proporciona el usuario en un mensaje de sistema (prompt). 
// Al crear la lista debemos añadir un botón “Añadir Tarea” el cual nos permitirá crear la primera tarea de la lista.
// Añadir junto al título de la lista  un botón para borrar la lista.
// Cada tarea que se añada a la lista debe incluir además del nombre de la tarea un botón que nos permita añadir una tarea antes,  
// otro que nos permita añadir una tarea después y un tercero que nos permita eliminar la tarea

document.addEventListener("DOMContentLoaded", eventos);

function eventos(){
    document.querySelector("button").addEventListener("click", function(e){
        const titulo=document.createElement("li");
        titulo.textContent=prompt("Dime el titulo de la lista");
        const ul=document.createElement("ul");
        const section = document.createElement("section");
        const li = document.createElement("li")
        const button = document.createElement("button")
        li.appendChild(button)
        button.textContent="Añadir tarea"
        button.addEventListener("click", function(e){
            const li=document.createElement("li");
            li.textContent=prompt("Dime el titulo de la lista");
            this.parentElement.parentElement.append(li)
        })
        document.querySelector("main")
        .appendChild(section)
        .appendChild(ul)
        .appendChild(titulo)
        .appendChild(li);
    })
}

