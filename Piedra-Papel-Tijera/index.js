const input1 = document.getElementById("jugador-1");
const input2 = document.getElementById("jugador-2");
const btnJugar = document.querySelector(".btn");
const nombreJugador = document.querySelector("#nombre-jugador");

let jugador1 = "";
let jugador2 = "";

let weapon1 = "";
let weapon2 = "";

btnJugar.addEventListener("click", play);

function play() {
  if (input1.value === "" || input2.value === "") {
    alert("Ingresa los jugadores");
  } else {
    jugador1 = input1.value;
    jugador2 = input2.value;
    document.querySelector(".comenzar").style.display = "none";
    document.querySelector(".escoger").style.display = "block";
    nombreJugador.innerText = `${jugador1} elige tu arma`;
  }
}

const images = document.querySelectorAll(".arma--clicked");

for (i = 0; i < images.length; i++) {
  images[i].addEventListener("click", selectWeapon);
}

let counter = 0;
function selectWeapon(event) {
  if (counter === 0) {
    weapon1 = event.target.alt;
    counter = counter + 1;
    nombreJugador.innerText = `${jugador2} elige tu arma`;
  } else if (counter === 1) {
    weapon2 = event.target.alt;
    document.querySelector(".escoger").style.display = "none";
    document.querySelector(".batalla").style.display = "flex";
    imageChange();
    document.querySelector("#nombre1").innerText = jugador1;
    document.querySelector("#nombre2").innerText = jugador2;
    conteo();
    match();
  }
}

function imageChange() {
  if (weapon1 === "Papel") {
    document
      .querySelector("#weapon1")
      .setAttribute("src", "./images/paper.svg");
  } else if (weapon1 === "Piedra") {
    document.querySelector("#weapon1").setAttribute("src", "./images/rock.svg");
  } else {
    document
      .querySelector("#weapon1")
      .setAttribute("src", "./images/scissor.svg");
  }
  if (weapon2 === "Papel") {
    document
      .querySelector("#weapon2")
      .setAttribute("src", "./images/paper.svg");
  } else if (weapon2 === "Piedra") {
    document.querySelector("#weapon2").setAttribute("src", "./images/rock.svg");
  } else {
    document
      .querySelector("#weapon2")
      .setAttribute("src", "./images/scissor.svg");
  }
}

let matchCounter = 3;
function conteo() {
  setInterval(() => {
    if (matchCounter > 0) {
      document.querySelector("#vs").innerText = matchCounter;
      matchCounter = matchCounter - 1;
    } else {
      document.querySelector(".batalla").style.display = "none";
      document.querySelector(".ganador").style.display = "flex";
      clearInterval();
    }
  }, 1000);
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
    document.querySelector(".ganador__jugador").innerText = jugador2;
  } else {
    document.querySelector("#ganador__texto").innerText = "Empate";
  }
}
