function obtenerNumero(number) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (number > 5) {
        resolve(number);
      } else {
        reject("Error: Es menor o igual a 5");
      }
    }, 3000);
  });
}

obtenerNumero(7)
  .then(function(info) {
    console.log(info);
  })
  .catch(function(error) {
    console.log(error);
  });
