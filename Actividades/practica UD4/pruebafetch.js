const URL_SERVER = "http://34.224.104.164:3000";

document.addEventListener("DOMContentLoaded", cargarTareas)

function pintarTareas(tareas){
    let main = document.querySelector("main");
    let ol = document.createElement("ol");
    let butAñadir = document.createElement("button")
    butAñadir.textContent = "Añadir tarea"
    butAñadir.addEventListener("click", añadirTarea)
    tareas.forEach(e => {
        addTarea(ol, e)
    })
    main.append(ol)
    main.append(butAñadir)
}

function cargarTareas(){
    fetch(URL_SERVER+"/tareas")
    .then(response => response.json())
    .then(data => pintarTareas(data));
}

function añadirTarea(){
    let nombre = prompt("Dime el texto");
    let tarea = {
        nombre : nombre
    }
    const options = {
        method: "POST", 
        body: JSON.stringify(tarea),
        headers: {
            "Content-Type": "application/json",
        }
    }
    let ol = document.querySelector("ol");
    fetch(URL_SERVER+"/tareas", options)
    .then(response => response.json())
    .then(data => addTarea(ol, data))
}

function borrarTarea(e){
    fetch(URL_SERVER+"/tareas/"+e.target.id, {method: "DELETE"})
    .then(response => response.json())
    .then(document.getElementById(e.target.id).remove())
}

function addTarea(ol, tarea){
    let li = document.createElement("li")
    li.textContent = tarea.nombre
    li.setAttribute("id", tarea.id)
    let button = document.createElement("button")
    button.textContent = "Borrar tarea"
    button.setAttribute("id", tarea.id)
    button.addEventListener("click", borrarTarea)
    li.append(button)
    ol.append(li)
}
