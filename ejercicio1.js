const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarMayorEdad(edad) {
  return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}

rl.question("Ingresa tu edad: ", (respuesta) => {
  const edad = parseInt(respuesta);

  if (isNaN(edad) || edad < 0) {
    console.log("Por favor, ingresa un número válido de edad.");
  } else {
    console.log(verificarMayorEdad(edad));
  }

  rl.close();
});
