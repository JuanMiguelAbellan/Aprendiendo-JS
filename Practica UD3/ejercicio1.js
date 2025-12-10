//Asigna un manejador de evento a los dos momentos de carga de la página (DOMContentLoaded, load,beforeunload) muestra el tipo de evento y el target.

document.addEventListener('DOMContentLoaded', function(evento){
    alert("ya esta cargado el dom");

    console.log("Target " + evento.target);
    console.log("Tipo " + evento.type);
});

window.addEventListener('load', function(evento){
    alert("ya esta cargado el dom y sus recursos");

    console.log("Target " + evento.target);
    console.log("Tipo " + evento.type);
});


//No funciona
window.addEventListener('beforeunload', function(evento){
    evento.returnValue = "Adios";
    console.log("Target " + evento.target);
    console.log("Tipo " + evento.type);
});

const beforeUnloadHandler = (event) => {
  // Recommended
  event.preventDefault();

  // Included for legacy support, e.g. Chrome/Edge < 119
  event.returnValue = true;
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
