// var nombreConVar = "Cristian";

// nombreConVar = "Paola";

// let nombreConLet = "Felipe";

// nombreConLet = "Javier";

// const apellido = "Gutierrez";

// // console.log(getName());

// function getName() {
//   return nombreConLet;
// }

// const getLastname = function() {
//   return apellido;
// };

// const getLastname2 = () => {
//   return apellido;
// };

// // console.log(getLastname());

// const mesa = {
//   patas: 4,
//   color: "cafe",

//   sostener: function() {
//     return "Estoy sosteniendo algo";
//   },

//   plegable() {
//     return "Estoy plegada";
//   }
// };

// mesa.altura = "70cm";

// mesa.correr = function() {
//   return "estoy corriendo";
// };

// console.log(nombreConLet.);

class Carro {
  constructor(llantas, puertas, marca) {
    this.llantas = llantas;
    this.puertas = puertas;
    this.marca = marca;
  }
  andar() {
    return "Estoy andando";
  }
  frenar() {
    return "Estoy frenando";
  }
}

const miCarro = new Carro(4, 4, "Ford");
const miCarro2 = new Carro(4, 4, "Mazda");
const miCarro3 = new Carro(4, 4, "Renault");

console.log(miCarro);
console.log(miCarro2);
console.log(miCarro3);
