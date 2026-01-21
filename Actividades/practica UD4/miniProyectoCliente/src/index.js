import { pedirUsusarios } from "./servicios.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    let button = document.querySelector("#btnLogin")
    button.addEventListener("click", login)
}

function login(){
    let email = document.querySelector("#username")
    let password = document.querySelector("#password")
    pedirUsusarios(email, password)
}

function registro(){

}