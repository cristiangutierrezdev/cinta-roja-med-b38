const mongoose = require("mongoose"); // Importamos la libreria
// URL generada de la base de datos de mongodb Atlas
const dbUrl =
  "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-roja-b38?retryWrites=true&w=majority";

// Importamos el modelo para que tenga conexion a la basa de datos
const User = require("./User");

// Creamos la conexion a la base de datos
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    !err ? console.log("Conexion exitosa") : console.log(err);
  }
);

// Exportamos el mondelo con la conexion
module.exports = {
  User
};
