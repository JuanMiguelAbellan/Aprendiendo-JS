import { get } from "./peticiones.js"


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

export function registro(){

}

export function pedirTareas(id, callback){
    console.log("/tareas"+ "?id_user="+id);
    
    get("/tareas", "?id_user="+id, callback, (e)=>{
        alert("Algo ha salido mal" + e)
    })
}