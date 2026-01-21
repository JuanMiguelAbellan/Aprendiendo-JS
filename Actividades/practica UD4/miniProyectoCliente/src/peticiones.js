import { URL_SERVER } from "./constantes.js"


export function get(ruta, condicion, callback, callbackError){
    fetch(URL_SERVER+ruta+condicion)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}

export function post(ruta, datos, callback, callbackError){
    
    const options={
        method: "POST", 
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(URL_SERVER+ruta, options)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}