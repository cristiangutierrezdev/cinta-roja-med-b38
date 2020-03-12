import React, { useEffect, useState } from "react";

function Card(props) {
  const [data, setData] = useState({
    user: "Paola",
    numero: 1234
  });

  useEffect(() => {
    console.log("Holi desde use effect");
  }); // Si tiene [] corchetes vacios, se ejecuta una sola vez -- Si tiene [variable] variable adentro se ejecuta si la variable cambia -- Si no tiene los corchetes se ejecuta cada vez que una variable cambie

  const change = () => {
    setData({
      ...data,
      user: "Javier"
    });
  };

  return (
    <div>
      <h2>
        Hola desde Card {data.numero} {data.user} {props.caminar}
      </h2>
      <button onClick={change}>Cambiar nombre</button>
      <button onClick={props.funcion}>Activar funcion</button>
    </div>
  );
}

export default Card;
