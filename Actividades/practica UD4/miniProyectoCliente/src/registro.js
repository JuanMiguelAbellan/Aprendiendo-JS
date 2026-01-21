import { registroUsuario } from "./servicios.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let nombre = document.querySelector("#nombre")
    let apellidos = document.querySelector("#apellidos")
    let news = document.querySelector("#news")
    let plan = document.querySelector("#plan")

    const datos={
        email : email.value,
        password : password.value,
        nombre : nombre.value,
        apellidos : apellidos.value,
        news : news.checked,
        plan : plan.value
    }
    registroUsuario(datos)
}