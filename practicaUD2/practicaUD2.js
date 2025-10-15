//1.
/*
let a = 1357;
let b = 135.7;
let c = 135e7;
let d = 0b1010;
let e = 0o1357;
let f = 0x1A57;

console.log(a);console.log(typeof(a));
console.log(b);console.log(typeof(b));
console.log(c);console.log(typeof(c));
console.log(d);console.log(typeof(d));
console.log(e);console.log(typeof(e));
console.log(f);console.log(typeof(f));
*/

//2.
/*
let numero = Number(prompt("Dime un numero: "));
console.log(numero);console.log(typeof(numero));
*/

//3.
/*
let nombre = prompt("Nombre: ");
let apellidos = prompt("Apellidos: ");
let edad = Number(prompt("Edad: "));
let numero = Number(prompt("Numero: "));

console.log("Hola "+ nombre + " " +apellidos + " tienes " + edad + "años.");
document.getElementById("parrafo2").innerText = "<h3>Hola "+ nombre +" "+ apellidos + " tienes " + edad + " años.</h3>";
alert("Dentro de "+ numero + " años tendras "+ (edad+numero))
*/

//4.
/*
let string = prompt("Dime una palabra: ");
document.getElementById("parrafo2").innerText="La posicion de la primera a es : "+string.indexOf("a");
*/

//5.
/*
let string = prompt("Dime una palabra: ");
let string2 = prompt("Dime una palabra: ");
let string3 = prompt("Dime una palabra: ");

alert(string.replace(string2, string3));
*/

//6.
/*
let string = prompt("Dime una palabra: ");
let string2 = prompt("Dime una palabra: ");
let string3 = prompt("Dime una palabra: ");

alert(string.replaceAll(string2, string3));
*/

//7.
/*
let string = prompt("Dime una palabra: ");
let string2 = prompt("Dime una palabra a buscar: ");

console.log([...string.matchAll(string2)].length);
*/

//8.
/*
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // 0
console.log(true + false) // false
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $9
console.log("4px" - 2) // 4px 
console.log("  -9  " + 5) // -9   5
console.log("  -9  " - 5) // -9
console.log(null + 1) // 1
console.log(undefined + 1) // 1
console.log(" \t \n" - 2) // -2
*/

//9.
/*
let a = prompt("¿Primer numero?", 1);
let b = prompt("¿Segundo numero? ", 2);

alert(parseInt(a) + parseInt(b));
*/

//10.
/*
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

console.log(c, d)
*/

//11.
/*
console.log(5 > 4) // true
console.log("apple" > "pineapple") // false
console.log("2" > "12") // false
console.log(undefined == null) // false
console.log(undefined === null) // Nan
console.log(null == "\n0\n") // false
console.log(null === +"\n0\n") // false
*/

//12.
/*
let numero = prompt("Die un numero entero");
(numero>=0)?alert("El numero es positivo o cero"):alert("el numero es negativo");
*/

//13., 14.
/*
let numero = prompt("Die una edad");

if(numero > 0 && numero <=12){
    alert("Niño")
}else if(numero >12 && numero < 26){
    alert("Joven")
}else if(numero > 27 && numero < 65){
    alert("Adulto")
}else if(numero > 65){
    alert("Jubilado")
}else{
    alert("El numero es negativo")
}
*/

//15.
/*
let numero = prompt("Die un numero del 1 al 10");

for (let i =1; i<=10; i++){
    console.log(numero + " * " + i + " = " + (numero*i))
}
*/

//16., 17.
/*
switch(prompt("Dime una fruta").toUpperCase()){
    case "FRESA":
        alert("Strawberry");
        break
    case "PERA":
        alert("Pear");
        break
    case "MANZANA":
        alert("Apple");
        break
    case "PIÑA":
        alert("Pineaple");
        break
    case "NARANJA":
        alert("Orange");
        break
    default:
        alert("Fruta desconocida");
        break
}
*/

/*Prueba Map
let mapaFrutas = new Map();
mapaFrutas.set("Pera", "pear")
mapaFrutas.set("Manzana", "Apple")
mapaFrutas.set("Piña", "pineaple")
mapaFrutas.set("Fresa", "strawberry")
mapaFrutas.set("Naranja", "Orange")

//mapaFrutas.keys.toUpperCase()

let ArrayFrutas = [...mapaFrutas.keys()]

ArrayFrutas.forEach((index)=>{
    console.log(index);
    
})

let numero = 3;


let frutaBuscada = prompt("Dime una fruta");
console.log(typeof frutaBuscada);

if(mapaFrutas.get(frutaBuscada.toUpperCase) != undefined){
    alert(mapaFrutas.get(frutaBuscada.toUpperCase))
}else{
    alert("Fruta desconocida")
}
*/


//18. ,19. para cuando me aburra

//20.
/*
function suma1(...numeros){
    let suma=0

    for (let num of numeros){
        suma += num
    }
    return suma
}
let suma2 = function(...numeros){
    let suma=0

    for (let num of numeros){
        suma += num
    }
    return suma
}
let suma3 = (...numeros)=>{
    let sumaTotal=0

    for (let num of numeros){
        sumaTotal += num
    }
    return sumaTotal;
}
console.log(suma1(4,5,6,12))
console.log(suma2(4,5,6,12))
console.log(suma3(4,5,6,12))
*/

//21.
/* !!!RESOLVER
function operacionesEncadenasa(operador1, operador2, callback1, callback2, callback3){
    
    callback1=suma(operador1, operador2)

    callback2=producto(operador1, operador2)

    callback3 = (callback1, callback2) =>{
        console.log("Suma: " + callback1)
        console.log("Producto: " +callback2)
    }
}

function suma(num1, num2){
    return num1+num2
}
function producto(num1, num2){
    return num1%num2
}

operacionesEncadenasa(10 , 5)
*/

//22.
/*
let array = [12, 35, 68, 14]

console.log(array.reduce(function(a, b){return a+b}))
*/

//23.
/*
let array = [12, 35, 68, 14]

console.log("Hay " + array.reduce(function(a, b){
    if (b%2==0){
        a++
    }
    return a
}, 0 )+" numeros pares")
*/

//24.
/*
let array=["Manzana", "Pera", "Frambuesa", "Fresa"]

console.log("La palabra mas larga es: " + array.reduce(function(a, b){
    if(b.length > a.length){
        a = b
    }
    return a
}))
*/

//25.
/*
const array=["Fresa" ,"Manzana", "Pera", "Frambuesa", "Fresa", "Fresa"]

const set = new Set(array);

console.log(set)
*/

//26.
/*
const paises = ["México", "Japón", "Italia", "Australia", "Brasil", "Canadá", "Francia", "Alemania", "India", "Argentina", "España", "China", "Sudáfrica", "Rusia", "Corea del Sur", "Reino Unido", "Estados Unidos", "Indonesia", "Egipto", "Turquía"];

function mostrarArray(array){
    document.getElementById("parrafo1").innerText = array;
    let ol =document.createElement('ol')
    array.forEach(element => {
        let li = document.createElement('li')
        li.textContent = element
        ol.appendChild(li)
    });
    document.body.appendChild(ol)
}

mostrarArray(paises)

function mostrarArrayAlreves(array){
    mostrarArray(array.reverse())
}

mostrarArrayAlreves(paises)

function añadirElemento(array){
    let elemento = prompt("Dime elemento a añadir: ")

    let respuesta = prompt("Principio o final")

    if (respuesta=="Principio"){
        array.unshift(elemento)
    }else{
        array.push(elemento)
    }
    mostrarArray(array)
}
añadirElemento(paises)

function eliminarElemento(array){
    let respuesta = prompt("Eliminar al principio o final")

    if (respuesta=="Principio"){
        array.shift()
    }else{
        array.pop()
    }
    mostrarArray(array)
}
eliminarElemento(paises)

function buscarPais(array){
    let buscado = prompt("Dime cual buscas")

    console.log(array.findIndex((pais)=> pais == buscado))
}
buscarPais(paises)

function añdirPais(array){
    let pais = prompt("Dime pais a añadir")

    if(array.find(pais)==undefined){
        array.push(pais)
    }else{
        console.log("El pais ya esta dentro del array");
    }
}
añdirPais(paises)

function eliminarPais(array){
    let pais = ("Dime pais a eliminar")

    return array.splice(array.indexOf(pais), 1)
}
*/

//27.

// function redondeo(numero, tipo){
//     console.log("El numero despues del redondeo " + tipo + " es " + tipo(numero));

//     return tipo(numero)
// }
// redondeo(13.4, Math.round)
// redondeo(13.4, Math.ceil)
// redondeo(13.4, Math.floor)
// redondeo(13.4, Math.trunc)

//28.

//  function radomRango(inferior, superior){
//     return Math.floor(Math.random()*(superior-inferior+1)+inferior)
// }

// console.log(radomRango(2, 5));

//29.

// function trigonometrico(angulo, callback){
//     angulo= angulo * Math.PI/180
//     console.log("Se ha aplicado el metodo " + callback + " y el resultado es " + callback(angulo));
    
//     return callback(angulo)
// }
// trigonometrico(25, Math.cos)

//30.

// function crearFecha(fecha){
//     fecha.toLocalDateString()
//      fecha.toDateString()
//      fecha.toUTCSgtring()        
// }

// console.log(crearFecha(5/10/2021));
// console.log(crearFecha("Wed Oct 06 2021."));
// console.log(crearFecha("Wed, 06 Oct 2021 15:54:47 GMT"));


//31.

// function horaDetallada(){
//     hora = new Date()
//     hora.toLocaleString()
//     hora.toLocaleStrin("en-US")
// }
// horaDetallada()

//32.

// function diasHastaFinal(){
//     let fechaFutura=new Date("2026/06/23")
//     let presente=new Date()

//     let diferencia = fechaFutura.getTime() - presente.getTime()

//     let dias= Math.round(diferencia / (1000 * 60 * 60 * 24));

//     console.log("Quedan ".concat(dias).concat( " dias hasta que acabe el curso"));
    
// }
// diasHastaFinal();

//33.

// function cumpleEnDomingos(){
//     const diaCumple = Number.parseInt(prompt("Introduce tu cumpleaños solo dia:"));
//     const mesCumple = Number.parseInt(prompt("Introduce tu cumpleaños solo mes:"));
//     const añoActual = new Date().getFullYear()
//     //debugger;
//     for (let año = añoActual; año <= 2100; año++) {
//         const fecha = new Date(año, mesCumple - 1, diaCumple);
//         if (fecha.getDate() !== diaCumple) {
//             continue;
//         }

//         if (fecha.getDay() === 0) {
//             //debugger;
//             console.log(año);
//         }
//     }
// }

// cumpleEnDomingos();

//34.

// function diasTextoCorto(dia){
//     const dias=["MO", "TU", "WE", "TH", "FR", "SA", "SU"]

//     console.log(dias[dia])
// }
// diasTextoCorto(3)

//35.

// function ultimoDiaMes(mes, año){
//     let fecha = new Date(año, mes, 0)
//     console.log("El ultimo dia es "+ fecha);
// }
// ultimoDiaMes(2,2020)

//36.

function segunosPasados(){
    let dia= new Date();

    console.log("Han pasado "+ dia.getHours()*60+dia.getMinutes()*60+dia.getSeconds()+" segundos");
    
}
segunosPasados()





//Hasta el 27