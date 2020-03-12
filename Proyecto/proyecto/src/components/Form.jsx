import React from "react";

function Form(props) {
  return (
    <form className="col s3 offset-m2">
      <h4>Crear Producto</h4>
      <div className="row">
        <div className="input-field col s12">
          <input id="Almacen" type="text" className="validate" />
          <label for="Almacen">Almacen</label>
        </div>
        <div className="input-field col s12">
          <input id="Marca" type="text" className="validate" />
          <label for="Marca">Marca</label>
        </div>
        <div className="input-field col s12">
          <input id="Vendedor" type="text" className="validate" />
          <label for="Vendedor">Vendedor</label>
        </div>
        <div className="input-field col s12">
          <input id="Telefono" type="number" className="validate" />
          <label for="Telefono">Telefono</label>
        </div>
        <div className="input-field col s12">
          <input id="Direccion" type="text" className="validate" />
          <label for="Direccion">Dirección</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="button" name="action">
        Enviar
        <i class="material-icons right">send</i>
      </button>
    </form>
  );
}

export default Form;
