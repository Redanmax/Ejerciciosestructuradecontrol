const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAumento() {
  console.log("=== CALCULADORA DE AUMENTO SALARIAL ===");

  readline.question("Nombre del empleado: ", (nombre) => {
    readline.question("Salario actual: ", (salario) => {
      readline.question("Categoría (A/B/C/D): ", (categoria) => {

        categoria = categoria.toUpperCase();
        salario = parseFloat(salario);

        if (isNaN(salario)) {
          console.log("\n¡Error! El salario debe ser un número");
          readline.close();
          return;
        }

 
        let aumentoPorcentaje;
        switch (categoria) {
          case 'A': aumentoPorcentaje = 15; break;
          case 'B': aumentoPorcentaje = 30; break;
          case 'C': aumentoPorcentaje = 10; break;
          case 'D': aumentoPorcentaje = 20; break;
          default:
            console.log("\n¡Error! Categoría no válida. Use A, B, C o D");
            readline.close();
            return;
        }


        const aumento = salario * (aumentoPorcentaje / 100);
        const nuevoSalario = salario + aumento;

        console.log("\n--- RESULTADO ---");
        console.log(`Empleado: ${nombre.toUpperCase()}`);
        console.log(`Categoría: ${categoria}`);
        console.log(`Salario actual: $${salario.toFixed(2)}`);
        console.log(`Aumento (${aumentoPorcentaje}%): $${aumento.toFixed(2)}`);
        console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);

        readline.close();
      });
    });
  });
}

calcularAumento();