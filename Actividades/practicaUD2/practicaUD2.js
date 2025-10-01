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

function operacionesEncadenasa(operador1, operador2, callback1, calback2, calback3){
    let resultado = 0;
    
    resultado = () => callback1(operador1 + operador2)

    console.log(resultado)
}
operacionesEncadenasa(3,5)







//Hasta el 27