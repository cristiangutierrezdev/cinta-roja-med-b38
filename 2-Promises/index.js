const request = require("request");

function getPeople() {
  const url = "";

  const people = new Promise(function(resolve, reject) {
    request.get(url, function(err, response, body) {
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
  return people;
}

function getPerson(id) {
  const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`;

  const person = new Promise(function(resolve, reject) {
    request.get(url, function(err, response, body) {
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
  return person;
}

// getPeople()
//   .then(data => {
//     console.log(data.results[2]);
//     return getPerson(20);
//   })
//   .then(person => {
//     console.log(person);
//   })
//   .catch(err => {
//     console.log(err);
//   });

getPerson(2604)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
