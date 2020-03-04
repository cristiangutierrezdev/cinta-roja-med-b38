const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hola mundo");
});

app.post("/user", (request, response) => {
  console.log(request.body.name);
  console.log(request.body.last_name);
  response.send("Mira la consola");
});

app.get("/get/user/:userid", (request, response) => {
  console.log(request.params.userid);
  response.send("Mira tu consola");
});

app.get("/search", (req, res) => {
  const name = req.query.name;
  const last_name = req.query.last_name;
  const fullname = `${name} ${last_name}`;
  res.send(fullname);
});

app.post("/crear/hamburguesa", (req, res) => {
  const ingredientes = req.body.ingredientes;
  if (ingredientes.length === 0) {
    res.send("Por favor ingresa ingredientes");
  } else {
    const hamburguesa = `La hamburguesa esta hecha de: ${ingredientes[0]}, ${ingredientes[1]} y ${ingredientes[2]}`;
    res.send(hamburguesa);
  }
});

app.listen(3000, err => {
  console.log(`Server on`);
});
