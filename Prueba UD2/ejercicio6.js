// Al cargar la página, comprueba si existen datos de usuario segun el formato  {nombre, apellidos, fechaNacimiento} en localStorage.
// Si existen, muestra en el documento un saludo y su edad aproximada en años.
// Si no existen, los pide con prompt() y los guarda con ese formato.

if(localStorage.getItem("nombre") != null){
    let fechaNacimiento = new Date(localStorage.getItem("fechaNacimiento"));
    let fechaHoy = new Date(Date.now());
    document.getElementById("parrafo").innerHTML="Hola " + localStorage.getItem("nombre") + " tienes aprox." + (fechaHoy.getFullYear()-fechaNacimiento.getFullYear() )
}else{
    let nombre= prompt('Dime tu {nombre: "nombre"')
    localStorage.setItem("nombre", nombre)
    let apellidos= prompt('apellidos: "apellidos"')
    localStorage.setItem("apellidos", apellidos)
    let fecha = prompt('fechaNacimiento: "AAAA-MM-DD"}')
    localStorage.setItem("fechaNacimiento", fecha)

}
