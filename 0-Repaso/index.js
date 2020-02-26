var nombreConVar = "Cristian";

nombreConVar = "Paola";

let nombreConLet = "Felipe";

nombreConLet = "Javier";

const apellido = "Gutierrez";

// console.log(getName());

function getName() {
  return nombreConLet;
}

const getLastname = function() {
  return apellido;
};

const getLastname2 = () => {
  return apellido;
};

// console.log(getLastname());

const mesa = {
  patas: 4,
  color: "cafe",

  sostener: function() {
    return "Estoy sosteniendo algo";
  },

  plegable() {
    return "Estoy plegada";
  }
};

mesa.altura = "70cm";

mesa.correr = function() {
  return "estoy corriendo";
};

console.log(nombreConLet.);
