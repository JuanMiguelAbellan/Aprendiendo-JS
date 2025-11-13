// Dado el siguiente array de productos de ejemplo:

// const productos = [
//   { nombre: "Manzanas", precio: 2.5 },
//   { nombre: "Peras", precio: 3 },
//   { nombre: "Plátanos", precio: 1.8 },
//   { nombre: "Kiwis", precio: 4 },
//   { nombre: "Fresas", precio: 3.5 }
// ];
// Haz una función que tenga como parámetro un array como el del ejemplo y en el documento:
// Muestre la lista de productos con su precio.
// Cree un nuevo array con los precios con IVA (21%) y muestre su informacion.
// Calcule el precio medio de los productos y la muestre.

// Ejemplo de salida en el documento:

// Lista de productos:
// Precios Sin IVA
// Manzanas: 2.5€ Peras: 3€  Plátanos: 1.8€   Kiwis: 4€   Fresas: 3.6€
// Precios con IVA: 
// Manzanas: 3.025€ Peras: 3.63€  Plátanos: 2.178€   Kiwis: 4.84€   Fresas: 4.356€
// Precio medio sin IVA: 2.98€

const productos = [
  { nombre: "Manzanas", precio: 2.5 },
  { nombre: "Peras", precio: 3 },
  { nombre: "Plátanos", precio: 1.8 },
  { nombre: "Kiwis", precio: 4 },
  { nombre: "Fresas", precio: 3.5 }
];

function mostrar(array){
    let media=0;
    let tamaño =0;
    document.getElementById("parrafo").innerHTML+="Lista de Productos<br> Precio sin IVA<br>"
    array.forEach(element => {
        media+=element.precio;
        tamaño++;
        document.getElementById("parrafo").innerHTML+=element.nombre+":"+element.precio
    });
    document.getElementById("parrafo").innerHTML+="<br> Precio con IVA <br>"
    array.forEach(element => {
        document.getElementById("parrafo").innerHTML+=element.nombre+":"+(element.precio*0.21)
    });
    document.getElementById("parrafo").innerHTML+="<br>Precio medio sin IVA: "+(media/tamaño)
}

mostrar(productos)