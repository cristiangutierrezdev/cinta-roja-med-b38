// function suma(numero1, numero2) {
//   let resultado = numero1 + numero2;

//   return resultado;
// }

// function obtenerSuma(otraFuncion, numero1, numero2) {
//   let suma = otraFuncion(numero1, numero2);

//   let mensaje = `La resultado de la suma entro los numeros ${numero1} y ${numero2} es: ${suma} `;

//   return mensaje;
// }

// console.log(obtenerSuma(suma, 1, 2));

// function suma(numero1, numero2) {
//   let resultado = numero1 + numero2;
//   return `La suma entre ${numero1} y ${numero2} es: ${resultado}`;
// }

// function multiplicacion(numero1, numero2) {
//   let resultado = numero1 * numero2;
//   return resultado;
// }

// function resta(numero1, numero2) {
//   let resultado = numero1 - numero2;
//   return resultado;
// }

// function division(numero1, numero2) {
//   let resultado = numero1 / numero2;
//   return resultado;
// }

// function activable(numero1, numero2, unaFuncion) {
//   let resultado = unaFuncion(numero1, numero2);
//   return resultado;
// }

// console.log(activable(123, 87, multiplicacion));
// console.log(activable(123, 87, resta));
// console.log(activable(123, 87, suma));
// console.log(activable(123, 87, division));

let regex = /[a-z]/g;

function minusculas(letras) {
  let resultado = letras.toLowerCase();
  return resultado;
}

function mayusculas(letras) {
  if (regex.test(letras)) {
    return "Error";
  } else {
    let resultado = letras.toUpperCase();
    return resultado;
  }
}

function convertidor(cualquierFuncion, texto) {
  let resultado = cualquierFuncion(texto);

  return resultado;
}

console.log(convertidor(minusculas, "HOLA MUNDO"));
console.log(convertidor(mayusculas, "HOLA MUNDO"));
