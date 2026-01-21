import { get } from "./peticiones.js"
import { post } from "./peticiones.js";


export function pedirUsusarios(username, password){
    get("/usuarios", "?email="+username.value, (e)=>{
        if(e[0].email === username.value && e[0].password === password.value){
            sessionStorage.setItem("id", e[0].id)
            window.location.assign("./tareas.html");
        }
    }, (e)=>{
        alert("Usuario y/o contraseña incorrectos" + e);
    })
}

export function registroUsuario(data){
    post("/usuarios", data, (e)=>{
        
        sessionStorage.setItem("id", e[0].id)
        document.location.assign("tareas.html")
    }, (e)=>{
        let h1= document.createElement("h1")
        h1.textContent="Algo ha salido mal por que " +e;
        document.querySelector("body").append(h1)
    })
}

export function pedirTareas(id, callback){
    console.log("/tareas"+ "?id_user="+id);
    
    get("/tareas", "?id_user="+id, callback, (e)=>{
        alert("Algo ha salido mal" + e)
    })
}