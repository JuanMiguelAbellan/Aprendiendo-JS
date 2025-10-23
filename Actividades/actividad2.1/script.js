class Evento{
    nombre
    fecha
    lugar
    invitados
    alertas
    constructor(nombre, fecha, lugar, invitados, alertas){
        this.nombre = nombre;
        this.fecha = Date(fecha);
        this.lugar= lugar;
        this.invitados = invitados;
        this.alertas= alertas;
    }
    agregarInvitado(invitado) {
        this.invitados.push(invitado)
    }
    agregarAlerta(){

    }
    activarAlertas(){

    }
    mostrarEvento(){
        document.write("<h2>"+this.nombre+"</h2>"+
            "Fecha: "+ this.fecha + "<br>" +
            "Lugar: "+ this.lugar + "<br>" +
            "Invitados: <ol>" + this.invitados.array.forEach(element => { "<li>"+element+"</li>"})+ "</ol><br>" +
            "Alertas: <ol>" + this.alertas.array.forEach(element => {"<li>"+element+"</li>"})+ "</ol><br>"
        )
    }
}

class Invitado{
    nombre
    email
    constructor(nombre, email){
        this.nombre=nombre
        if(email.includes("@")){
            this.email=email
        }else{
            alert("El email debe tener un @")
        }
    }
}

let agendaLS= cargarAgenda()
const agenda= [...agendaLS].map((evento) => new Evento(evento))

switch(prompt("1. Añadir evento"
    + "2. Borrar Evento"
    + "3. Modificar Evento"
    + "4. Desactivar las alertas de un evento"
    + "5. Borrar eventos pasados"
    + "6. Salir sin guardar"
    + "7. Salir guardando y mostrando la agenda"
)){
    case "1":
        agregarEvento()
        break
    case "2":
        borrarEvento()
        break
    case "3":
        modificarEvento()
        break
    case "4":

        break
    case "5":
        borrarEventosPasados()
        break
    case "6":
        mostrarEventos()
        break
    case "7":
        guardarAgenda()
        mostrarEventos()
        break
    default:
        mostrarEventos()
}

function cargarAgenda(){
    comprobante=localStorage.getItem("agenda")
    let agendaUsuario = [];
    if(comprobante != null){
        alert("Agenda anterior coreectamente cargada")
        agendaUsuario = JSON.parse(localStorage.getItem("agenda"));
    }else{
        alert("No se ha encontrado una agenda anterior")
    }

    return agendaUsuario;
}

function guardarAgenda(){
    localStorage.setItem(jsx(JSON.stringify(agenda)))
}

function agregarEvento(){
    let nombre =prompt("Dime el nombre del evento")
    let fecha =prompt("Dime fecha del evento formato 'AAAA-MM-DDTHH:MM'")
    let lugar =prompt("Dime el lugar")
    let bool =prompt("¿Van a venir invitados? Si/No")
    let invitados= new Array;
    if (bool=="Si"){
        let cantidad= prompt("Dime cuantos")
        while(cantidad>0){
            let nombre= prompt("Dime el nombre del invitado "+ cantidad)
            let email = prompt("Dime su email")
            invitados.push(new Invitado(nombre, email))
            cantidad--
        }
    }

    let alertas =prompt("¿Quieres poner alguna alerta")

    let eventoNuevo = new Evento(nombre, fecha, lugar, invitados, alertas)
    agendals.push(eventoNuevo)
}

function mostrarEventos(){
    agendaUsuario.eventos.forEach(element => {element.mostrarEvento})
}

function borrarEvento(){
    let nombre =prompt("Dime el nombre del evento")
    agendaUsuario.eventos.slice(agendaUsuario.eventos.find((element) => element.nombre == nombre))
}

function borrarEventosPasados(){
    agendaUsuario.eventos.slice(agendaUsuario.find((element)=> element.fecha < Date.now()))
}

function modificarEvento(){
    let nombre= prompt("Dime el nombre del evento")
    switch(prompt("1. Modificar nombre"
    + "2. Modificar Fecha"
    + "3. Modificar Lugar"
    + "4. Añadir invitado"
    + "5. Añadir nueva alerta"
    )
){
    case 1: 
        nuevoNombre= prompt("Dime el nuevo nombre")
        let encontrado = agendaUsuario.eventos.find((element) => {element.nombre == nombre} )
        encontrado.nombre=nuevoNombre
        agregarEvento(encontrado)
        borrarEvento(nombre)
        break
    case 2: 
        nuevaFecha= prompt("Dime la nueva fecha")
        encontrado = agendaUsuario.eventos.find((element) => {element.nombre == nombre} )
        encontrado.fecha = nuevaFecha
        agregarEvento(encontrado)
        borrarEvento(nombre)
        break
    case 3: 
        nuevoLugar= prompt("Dime el nuevo lugar")
        encontrado = agendaUsuario.eventos.find((element) => {element.nombre == nombre} )
        encontrado.lugar= nuevoLugar
        agregarEvento(encontrado)
        borrarEvento(nombre)
        break
    case 4: 
        nuevoInvitado= new Invitado(prompt("Dime el nombre"), prompt("Dime el email"))
        encontrado = agendaUsuario.eventos.find((element) => {element.nombre == nombre} ).agregarInvitado(nuevoInvitado)
        break
    case 5:

        break
}   
    
}

function desactivarAlertas(evento){

}