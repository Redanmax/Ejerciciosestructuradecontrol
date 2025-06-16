const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNotaFinal() {
  console.log("=== CALCULADORA DE NOTA FINAL ===");

  readline.question("Nombre del alumno: ", (nombre) => {
    readline.question("Carnet del alumno: ", (carnet) => {
      readline.question("Nota del examen (20%): ", (examen) => {
        readline.question("Nota de tareas (40%): ", (tareas) => {
          readline.question("Nota de asistencia (10%): ", (asistencia) => {
            readline.question("Nota de investigación (30%): ", (investigacion) => {
                
              examen = parseFloat(examen);
              tareas = parseFloat(tareas);
              asistencia = parseFloat(asistencia);
              investigacion = parseFloat(investigacion);


              if ([examen, tareas, asistencia, investigacion].some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
                console.log("\n¡Error! Las notas deben ser números entre 0 y 10");
                readline.close();
                return;
              }

              const notaFinal = 
                (examen * 0.20) + 
                (tareas * 0.40) + 
                (asistencia * 0.10) + 
                (investigacion * 0.30);

              console.log("\n--- RESULTADO ---");
              console.log(`Alumno: ${nombre.toUpperCase()}`);
              console.log(`Carnet: ${carnet}`);
              console.log(`Nota final: ${notaFinal.toFixed(2)}/10`);

              readline.close();
            });
          });
        });
      });
    });
  });
}

calcularNotaFinal();