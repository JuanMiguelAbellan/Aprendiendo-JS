// Crea una función corregirTexto(correcciones, texto) que reemplaza las palabras mal escritas según un objeto correcciones.

// La función debe devolver el texto corregido, reemplazando todas las apariciones de las palabras erróneas por las correctas.

// Muestra el resultado final en el documento usando document.write() o innerHTML

// Ejemplo a usar:

// const correcciones = {
//   "abrakadbra": "abracadabra",
//   "levtación": "levitación",
//   "volae": "volar",
//   "invisivilidad": "invisibilidad",
//   "espéctro": "espectro"
// };

// texto de prueba para corregir

// const texto = "El mago dijo abrakadbra para hacer levtación y luego volae con un espéctro de invisivilidad.";

// salida esperada 

// El mago dijo abracadabra para hacer levitación y luego volar con un espectro de invisibilidad

function corregirTexto(texto){

    let textoCorregido=texto

    for(const palabra in correcciones){
        if(texto.includes(palabra)){
            // console.log("Esta esta palabra " + palabra);
            // console.log("Su valor  " + correcciones[palabra]);
            
            textoCorregido=textoCorregido.replace(palabra, correcciones[palabra]);
        }
    }
    return textoCorregido;
}

const correcciones = {
  "abrakadbra": "abracadabra",
  "levtación": "levitación",
  "volae": "volar",
  "invisivilidad": "invisibilidad",
  "espéctro": "espectro"
};

const texto = "El mago dijo abrakadbra para hacer levtación y luego volae con un espéctro de invisivilidad.";

console.log(corregirTexto(texto));


