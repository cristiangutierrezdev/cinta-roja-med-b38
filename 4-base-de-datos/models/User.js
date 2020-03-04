const mongoose = require("mongoose"); // Importamos la libreria Mongoose

// Creamos el esquema(plantilla) para crear usuarios
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    document: Number,
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Creamos el modelo para los usuarios, donde le pasamos el nombre de la collecion(la tabla), y la plantilla a seguir
const User = mongoose.model("User", userSchema);

module.exports = User; // Exportamos el modelo creado
