import { pedirTareas } from "./servicios.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    let lista = document.querySelector("#listaTareas")

    pedirTareas(sessionStorage.getItem("id"), pintarTareas)
}

function pintarTareas(tareas){
    let main = document.querySelector("main");
    let ol = document.createElement("ul");
    tareas.forEach(e => {
        addTarea(ol, e)
    })
    main.append(ol)
}

function addTarea(ol, tarea){
    let li = document.createElement("li")
    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    cheked
    li.textContent = tarea.nombre;
    li.append(check)
    ol.append(li)
}