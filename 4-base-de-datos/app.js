const express = require("express"); // Importamos Express
const app = express(); // Inicializamos express
const PORT = process.env.PORT || 3000; // Busca el puerto disponible en el entorno de desarrollo
const cors = require("cors"); // Importamos Cors
const { User } = require("./models"); // Importamos el modelo con la conexion

app.use(express.urlencoded({ extended: true })); // Nos deja recibir datos de tipo multimedia
app.use(express.json()); // Convierte la info que llega en datos JSON(objetos) y nos deja obtener el body de la peticion
app.use(cors()); // Permite que nuestra API sea consultada desde las URLs que queramos, si esta vacio significa que cualquier app puede hacer peticiones a nuetra API

// USER CRUD (CREATE, READ, UPDATE, DELETE)

app.post("/api/v1/create/user", (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, response) => {
    !err ? res.status(201).send(response) : res.status(409).send(err);
  });
});

app.get("/api/v1/get/users", (req, res) => {
  User.find({ is_active: true }, (err, response) => {
    !err ? res.status(201).send(response) : res.status(409).send(err);
  });
});

app.get("/api/v1/get/user/:userid", (req, res) => {
  User.findById(req.params.userid, (err, response) => {
    !err ? res.status(200).send(response) : res.status(404).send(err);
  });
});

app.put("/api/v1/update/user/:userid", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userid,
    { $set: req.body },
    { new: true },
    (err, response) => {
      !err ? res.status(200).send(response) : res.status(404).send(err);
    }
  );
});

app.delete("/api/v1/delete/user/:userid", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userid,
    { $set: { is_active: false } },
    { new: true },
    (err, response) => {
      !err
        ? res.status(200).send({ message: "Ususario eliminado" })
        : res.status(404).send(err);
    }
  );
});

app.patch("/api/v1/active/user/:userid", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userid,
    { $set: { is_active: true } },
    { new: true },
    (err, response) => {
      !err ? res.status(200).send(response) : res.status(404).send(err);
    }
  );
});

// Levantamos el servidor en el puerto indicado
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
