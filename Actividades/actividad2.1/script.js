class Evento{
    constructor(nombre, fechaHora, lugar, invitados = [], alertas = []){
        this.nombre = nombre;
        this.fechaHora = new Date(fechaHora);
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }

    agregarInvitado(invitado) { 
        this.invitados.push(invitado) 
    }

    agregarAlerta(alerta){ 
        this.alertas.push(alerta) 
    }

    activarAlertas(){
        this.alertas.forEach(alterta => {
            let ms = new Date(alterta.fechaHora) - new Date();
            if(ms > 0){
                alterta.timerID = setTimeout(() => alert(alterta.mensajeAlerta), ms);
            }
        });
    }

    mostrarEvento(){
        const lista = document.getElementById('lista');
        lista.innerHTML += `<h2>${this.nombre}</h2>
                        Fecha/hora: ${this.fechaHora}<br>
                        Lugar: ${this.lugar}<br>
                        Invitados: <ul>` +
                        this.invitados.map(inv => `<li>${inv.nombre} Email: ${inv.email}</li>`) +
                        `</ul>Alertas: <ul>` +
                        this.alertas.map(alt => `<li>${alt.fechaHora}: ${alt.mensajeAlerta}</li>`)+
                        `</ul>`+
                        '<hr color=red>';
    }
    desactivarAlertas(){
        this.alertas.forEach(a=>{ 
            if(a.timerID){
                clearTimeout(a.timerID); 
                a.timerID=null;
            }
    });
}
}
class Invitado{
    constructor(nombre, email){
        this.nombre=nombre;
        while(!email.includes("@")){
            alert("El email debe tener un @");
            email=prompt("Dime el email")
        }
        this.email=email;
    }
}

class Alerta{
    constructor(fechaHora, mensajeAlerta){
        this.fechaHora= fechaHora;
        this.mensajeAlerta= mensajeAlerta;
        this.timerID= null;
    }
}

function cargarAgenda(){
    const agendaLS = localStorage.getItem("agenda");
    if(agendaLS){
        alert("Agenda anterior cargada");
        return JSON.parse(agendaLS).map(e =>
            new Evento(e.nombre, e.fechaHora, e.lugar,
                       e.invitados,
                       e.alertas)
        );
    }else{
        alert("No se ha encontrado una agenda anterior");
        return [];
    }
}

function guardarAgenda(){
    localStorage.setItem("agenda", JSON.stringify(agenda));
    //mostrarEventos(); 
}

const agenda = cargarAgenda();

let salir = false;
do{
    let opcion = prompt(
        "1. Añadir evento\n" +
        "2. Borrar Evento\n" +
        "3. Modificar Evento\n" +
        "4. Desactivar alertas\n" +
        "5. Borrar eventos pasados\n" +
        "6. Salir sin guardar\n" +
        "7. Guardar y salir");

    switch(opcion){
        case "1": 
            agregarEvento(); 
            break;
        case "2": 
            borrarEvento(); 
            break;
        case "3":
            modificarEvento();
            break;
        case "4":
            desactivarAlertasEvento();
            break;
        case "5":
            borrarEventosPasados();
            break;
        case "6":
            mostrarEventos();

            salir =true; 
            break;
        case "7":
            mostrarEventos();
            guardarAgenda();

            salir = true; 
            break;
        default:
            alert("Opción no válida");
   }
}while(!salir);

function agregarEvento(){
    const nombre   = prompt("Dime el nombre del evento");
    const fechaHora= prompt("Dime fecha del evento formato 'AAAA-MM-DDTHH:MM'");
    const lugar    = prompt("Dime el lugar");

    const invitados=[];
    if(confirm("¿Van a venir invitados?")){
        while(confirm("¿Alguno mas?")){
            const nom  = prompt("Dime el nombre del invitado");
            const email= prompt("Dime su email");
            invitados.push(new Invitado(nom, email));
        }
    }

    const alertas=[];
    while(confirm("¿Quieres poner alguna alerta?")){
        const fechaHora  = prompt("Fecha/hora de la alerta (AAAA-MM-DDTHH:MM)");
        const msg = prompt("Mensaje de la alerta");
        alertas.push(new Alerta(fechaHora, msg));
    }

    const evento = new Evento(nombre, fechaHora, lugar, invitados, alertas);
    agenda.push(evento);
    evento.activarAlertas();
}

function mostrarEventos(){
    agenda.forEach(e=>e.mostrarEvento());
}

function borrarEvento(){
    const nombre = prompt("Dime el nombre del evento a borrar");
    const id= agenda.findIndex(e=>e.nombre===nombre);
    if(id<0){ 
        alert("No encontrado"); 
        return; 
    }
    agenda[id].desactivarAlertas();
    agenda.splice(id,1);
}

function borrarEventosPasados(){
    const ahora = new Date().toISOString().slice(0,16);
    agenda = agenda.filter(e=>{
        if(e.fechaHora < ahora){
            e.desactivarAlertas();
            return false;
        }
        return true;
    });
}

function modificarEvento(){
    const nombre = prompt("Dime el nombre del evento a modificar");
    const evento = agenda.find(e=>e.nombre===nombre);
    if(!evento){ alert("No encontrado"); return; }

    const sub = prompt(
        "1. Modificar nombre\n" +
        "2. Modificar Fecha/hora\n" +
        "3. Modificar Lugar\n" +
        "4. Añadir invitado\n" +
        "5. Añadir alerta"
    );
    switch(sub){
        case "1":
            evento.nombre = prompt("Nuevo nombre"); 
            break;
        case "2":
            evento.fechaHora=prompt("Nueva fecha (AAAA-MM-DDTHH:MM)"); 
            break;
        case "3":
            evento.lugar  =prompt("Nuevo lugar"); 
            break;
        case "4":
            const invitado = new Invitado(prompt("Nombre"), prompt("Email"));
            evento.agregarInvitado(invitado);
            break;
        case "5":
            const alerta = new Alerta(prompt("Fecha/hora alerta"), prompt("Mensaje"));
            evento.agregarAlerta(alerta);
            evento.activarAlertas();
            break;
    }
}

function desactivarAlertasEvento(){
    const nombre = prompt("Nombre del evento");
    const evento = agenda.find(e=>e.nombre===nombre);
    if(evento){ 
        evento.desactivarAlertas(); 
        alert("Alertas desactivadas");
    }
}