// Crea una clase Vehículo con:
// Propiedades: 
// marca, modelo, velocidad (por defecto 0).
// Métodos:
// acelerar(cantidad) → aumenta la velocidad,
// frenar(cantidad) → la reduce sin dejar que sea negativa,
// mostrar() → muestra en el documento los datos del vehículo.

// Pon ejemplos de creación de una instancia y uso de los métodos definidos.

class Vehículo{
    constructor(marca, modelo, velocidad=0){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=velocidad;
    }
    acelerar(cantidad){
        this.velocidad+=cantidad;
    }
    frenar(cantidad){
        if(this.velocidad>0){
            this.velocidad-=cantidad;
            if(this.velocidad<0){
                this.velocidad=0;
            }
        }
    }
    mostrar(){
        document.body.innerHTML+="Marca: "+this.marca+" Modelo: "+ this.modelo + " Velocidad actual: " + this.velocidad;
    }
}

let coche1 = new Vehículo("Nissan", "Almera");
coche1.acelerar(5)
coche1.frenar(2)
coche1.frenar(10)
coche1.mostrar();

coche2=new Vehículo()
coche2.marca="Audi";
coche2.modelo="A4";
coche2.mostrar();