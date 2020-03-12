import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const funcion = () => {
    alert("Hola desde la funcion");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/navbar" component={Navbar} />
        <Route path="/card" component={Card2} />
        <Card
          caminar="Estoy caminando"
          otra="cualquier cosa"
          funcion={funcion}
        />
        <h1>Hola Desde el componente padre App</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
