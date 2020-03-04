const express = require("express"); // Importamos Express
const app = express(); // Inicializamos express
const PORT = process.env.PORT || 3000; // Busca el puerto disponible en el entorno de desarrollo
const cors = require("cors");
const { User } = require("./models");

app.use(express.urlencoded({ extended: true })); // Nos deja recibir datos de tipo multimedia
app.use(express.json()); // Convierte la info que llega en datos JSON(objetos) y nos deja obtener el body de la peticion
app.use(cors()); // Permite que nuestra API sea consultada desde las URLs que queramos, si esta vacio significa que cualquier app puede hacer peticiones a nuetra API

// USER CRUD (CREATE, READ, UPDATE, DELETE)

app.post("/api/v1/create/user", (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    !err ? res.status(201).send(user) : res.status(409).send(err);
  });
});

app.get("/api/v1/get/users", (req, res) => {
  User.find({ is_active: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

// Levantamos el servidor en el puerto indicado
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
