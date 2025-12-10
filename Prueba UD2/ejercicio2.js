// Pide al usuario su fecha de nacimiento en un único dato. Calcula su edad aproximada 
// (a partir del año actual comparando con el año de su nacimiento) y muestra un mensaje personalizado en el documento según una de las siguientes situaciones:

// “Eres menor de edad” (< 18)
// “Este año cumples 18” (=18)
// “Eres adulto” (19–65)
// “Este año te jubilas” (=65)
// “Eres mayor de 65 años” (> 65)
// Si el usuario introduce una fecha futura debe avisar con un mensaje “ Pero si todavía no has nacido”


const fechaNacimiento= prompt("Dime tu fecha de nacimiento en formato AAAA-MM-DD");
console.log(fechaNacimiento);

let fecha=new Date(fechaNacimiento);
console.log(fechaNacimiento);
let mayor18= new Date(Date.now());
mayor18.setFullYear(2007);
console.log(mayor18);

let comparando = (mayor18.getFullYear()-fecha.getFullYear());
console.log(comparando);

if(comparando >= 0){
    alert("Eres mayor de edad");
}else if(comparando < 0){
    alert("Eres menor de edad")
}else if(comparando >1 && comparando<47){
    alert("Eres adulto")
}else if(comparando>47){
    alert("Eres mayor de 65")
}else if(comparando == 47){
    alert("Este alo te jubilas")
}

// switch(comparando){
//     case >18:
//         alert("Eres mayor de edad");
//         break;
//     case (fecha.getFullYear()-mayor18.getFullYear())<18:
//         alert("Eres menor de edad")
//         break;
//     case (fecha.getFullYear()-mayor18.getFullYear())>19 && (fecha.getFullYear()-mayor18.getFullYear())<65:
//         alert("Eres adulto")
//         break;
//     case (fecha.getFullYear()-mayor18.getFullYear())==65:
//         alert("Este alo te jubilas")
//         break;
//     case (fecha.getFullYear()-mayor18.getFullYear())>65:
//         alert("Eres mayor de 65")
//         break;
// }