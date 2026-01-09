//Coloca una imagen en el documento y que cuando pasemos por encima la imagen cambie 
// (lo puedes hacer con dos imágenes diferentes o la misma en diferentes tamaños)

const imagen = document.querySelector("#imagen");

imagen.addEventListener("mouseenter", function(e){
    imagen.src = "./imagenes/396njf2.jpg"
})
imagen.addEventListener("mouseleave", function(e){
    imagen.src = "./imagenes/396njf.jpg"
})
imagen.addEventListener("click", function(e){
    imagen.src = "./imagenes/396njf.webp"
})