document.addEventListener("DOMContentLoaded", añadirListener)

function añadirListener(){
    const form = document.querySelector(".formulario");
    form.addEventListener("click", (e)=>{
        alert("Target: "+ e.target + "This: " + this.tagName)
    })
}