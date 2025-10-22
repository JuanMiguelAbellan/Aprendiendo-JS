cargarAgenda();
function cargarAgenda(){
    agenda=localStorage.getItem("agenda")
    const agendals=[]
    if(agenda != ""){
        alert("Agenda anterior coreectamente cargada")
        agendals=JSON.parse(localStorage.getItem("agenda"))
    }else{
        alert("No se ha encontrado una agenda anterior")
    }
    agendaUsuario = new Agenda(JSON.parse(agendals))
}

switch(prompt("1. Añadir evento"
    + "2. Borrar Evento"
    + "3. Modificar Evento"
    + "4. Desactivar las alertas de un evento"
    + "5. Borrar eventos pasados"
    + "6. Salir sin guardar"
    + "7. Salir guardando y mostrando la agenda"
)){
    case 1:
        function asdf(){};
        break
    case 2:
        function asdf(){};
        break
    case 3:
        function asdf(){};
        break
    case 4:
        function asdf(){};
        break
    case 5:
        function asdf(){};
        break
    case 6:
        function asdf(){};
        break
    case 7:
        function asdf(){};
        break
}

class Agenda{
    eventos
    constructor(evento){
        this.eventos.push(evento)
    }
}

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

function agregarEvento(evento){
    agendaUsuario.eventos.push(evento)
}

function mostrarEventos(){
    agendaUsuario.eventos.forEach(element => {element.mostrarEvento})
}

function borrarEvento(nombre){
    agendaUsuario.eventos.slice(agendaUsuario.eventos.find((element) => element.nombre == nombre))
}

function borrarEventosPasados(){
    agendaUsuario.eventos.slice(agendaUsuario.find((element)=> element.fecha < Date.now()))
}

function modificarEvento(nombre){
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