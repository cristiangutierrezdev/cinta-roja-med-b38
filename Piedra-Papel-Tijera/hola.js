function match() {
  if (weapon1 === "Piedra") {
    if (weapon2 === "Papel") {
    }
  } else if (weapon1 === "Papel") {
    document.querySelector(".ganador__jugador").innerText = jugador2;
  }
  if (weapon2 === "Tijeras") {
    document.querySelector(".ganador__jugador").innerText = jugador2;
  } else if (weapon2 === "Tijeras") {
  }
  if (weapon1 === "Piedra") {
    document.querySelector(".ganador__jugador").innerText = jugador1;
  } else {
    document.querySelector(".ganador__jugador").innerText = "Empate";
  }
}

function match() {
  if (weapon1 === weapon2) {
    document.querySelector(".ganador__jugador").innerText = "Empate";
  } else if (weapon1 === "Piedra") {
    if (weapon2 === "Papel") {
      document.querySelector(".ganador__jugador").innerText = jugador2;
    } else if (weapon1 === "Papel") {
      if ((weapon2 = "Tijeras")) {
        document.querySelector(".ganador__jugador").innerText = jugador2;
      } else if (weapon1 === "Papel") {
        if ((weapon2 = "Piedra")) {
          document.querySelector(".ganador__jugador").innerText = jugador2;
        } else if (weapon1 === "Piedra") {
          if (weapon2 === "Tijeras") {
            document.querySelector(".ganador__jugador").innerText = jugador1;
          } else if (weapon1 === "Papel") {
            if (weapon2 === "Piedra") {
              document.querySelector(".ganador__jugador").innerText = jugador1;
            } else {
              document.querySelector(".ganador__jugador").innerText = jugador1;
            }
          }
        }
      }
    }
  }
}

function match() {
  if (weapon1 === "Piedra" && weapon2 === "Papel") {
    document.querySelector(".ganador__jugador").innerText = jugador2;
  } else if (weapon1 === "Piedra" && weapon2 === "Tijeras") {
    document.querySelector(".ganador__jugador").innerText = jugador1;
  } else if (weapon1 === "Papel" && weapon2 === "Piedra") {
    document.querySelector(".ganador__jugador").innerText = jugador1;
  } else if (weapon1 === "Papel" && weapon2 === "Tijeras") {
    document.querySelector(".ganador__jugador").innerText = jugador2;
  } else if (weapon1 === "Tijeras" && weapon2 === "Papel") {
    document.querySelector(".ganador__jugador").innerText = jugador1;
  } else if (weapon1 === "Tijeras" && weapon2 === "Piedra") {
    document.querySelector(".ganador__jugador").innerText = jugador1;
  } else {
    document.querySelector(".ganador__jugador").innerText = "Empate";
  }
}
