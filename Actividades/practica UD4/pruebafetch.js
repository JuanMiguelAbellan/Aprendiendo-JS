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
    document.querySelector("h1").append(butAñadir)
}

function cargarTareas(){
    fetch(URL_SERVER+"/tareas")
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => pintarTareas(data))
    .catch(error => console.log(error))
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
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => addTarea(ol, data))
    .catch(error => console.log(error))
}

function borrarTarea(e){
    fetch(URL_SERVER+"/tareas/"+e.target.id, {method: "DELETE"})
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .catch(error => console.log(error))
    .then(data => document.getElementById(data.id).remove())
    .catch(error => console.log(error))
    
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