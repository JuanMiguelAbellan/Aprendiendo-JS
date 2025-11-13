// Haz un programa que pida al usuario una nota numérica entre 0 y 10 y muestre en el documento tres informaciones:
// La nota en formato textual, según esta escala:

// 0 – 2 → Muy deficiente
// 3 – 4 → Insuficiente
// 5 → Suficiente
// 6 → Bien
// 7 – 8 → Notable
// 9 – 10 → Sobresaliente

// Un mensaje motivacional que debe obtenerse de un array de 11 posiciones (una por cada posible nota de 0 a 10).

// Array de  ejemplo:
// const mensajes = [
//     "Necesitas estudiar mucho más.",
//     "Todavía te queda camino por recorrer.",
//     "Estás muy cerca de mejorar.",
//     "Sigue esforzándote, vas progresando.",
//     "Casi lo consigues, un poco más.",
//     "Has aprobado, buen trabajo.",
//     "Bien hecho, vas por buen camino.",
//     "Muy bien, estás por encima de la media.",
//     "Excelente, gran esfuerzo.",
//     "Sobresaliente, un resultado brillante.",
//     "Perfecto, eres un ejemplo para los demás."
// ];

// El programa debe seleccionar el mensaje correspondiente a la nota introducida y mostrarlo junto al texto de la calificación.

// Si la nota es menor que 5, además debe indicar cuántos puntos faltan para aprobar.

// El programa debe validar que la nota es un número entre 0 y 10, si es mayor de 10, volverá a pedirla.

// El resultado final debe mostrarse en el documento con este formato:

// La nota 3 es insuficiente. Te faltan 2 puntos para aprobar. Sigue esforzándote, vas progresando.



const mensajes = [
    "Necesitas estudiar mucho más.",
    "Todavía te queda camino por recorrer.",
    "Estás muy cerca de mejorar.",
    "Sigue esforzándote, vas progresando.",
    "Casi lo consigues, un poco más.",
    "Has aprobado, buen trabajo.",
    "Bien hecho, vas por buen camino.",
    "Muy bien, estás por encima de la media.",
    "Excelente, gran esfuerzo.",
    "Sobresaliente, un resultado brillante.",
    "Perfecto, eres un ejemplo para los demás."
];
let nota = 11;
do{
    nota = prompt("Dime la nota numerica");
}while(nota > 10 || nota <0)

if(nota >= 0 && nota <=2){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es Muy deficiente. Te faltan "+ (5-nota) +" puntos para aprobar. " + mensajes[nota-1];
}else if(nota >= 3 && nota <=4){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es insuficiente. Te faltan "+ (5-nota) +" puntos para aprobar. " + mensajes[nota-1];
}else if(nota == 5){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es Suficiente. " + mensajes[nota-1];
}else if(nota == 6){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es Bien. " + mensajes[nota-1];
}else if(nota >=7 && nota <=8){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es Notable. " + mensajes[nota-1];
}else if(nota >=9 && nota <=10){
    document.getElementById("parrafo").innerHTML="La nota "+ nota + " es Sobresaliente. " + mensajes[nota-1];
}