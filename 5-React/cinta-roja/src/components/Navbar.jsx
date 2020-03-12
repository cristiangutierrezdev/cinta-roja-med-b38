import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: "Cargando..."
    };
  }

  componentWillMount() {
    console.log("El componente se va a montar");
  }

  change = () => {
    this.setState({
      numero: this.state.numero + 1
    });
  };

  render() {
    console.log("El componente se esta montando");
    return (
      <div className="Navbar">
        <h2>{this.state.numero}</h2>
        <button onClick={this.change}>Click here</button>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        numero: 1000
      });
    }, 3000);
    console.log("El componente ya se monto");
  }
}

export default Navbar;
