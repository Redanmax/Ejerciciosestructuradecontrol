const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calcularPromedios() {
    const ingresarEdades = async (cantidad, turno) => {
        let edades = [];
        console.log(`\nIngrese las edades del turno ${turno}:`);
        
        for (let i = 1; i <= cantidad; i++) {
            const edad = await new Promise(resolve => {
                readline.question(`Edad estudiante ${i}: `, resolve);
            });
            edades.push(parseInt(edad));
        }
        
        return edades;
    };


    const manana = await ingresarEdades(5, 'mañana');
    const tarde = await ingresarEdades(6, 'tarde');
    const noche = await ingresarEdades(11, 'noche');

   
    const promedio = edades => edades.reduce((a, b) => a + b, 0) / edades.length;
    
    const promManana = promedio(manana);
    const promTarde = promedio(tarde);
    const promNoche = promedio(noche);

  
    console.log('\n--- Resultados ---');
    console.log(`Promedio turno mañana: ${promManana.toFixed(2)}`);
    console.log(`Promedio turno tarde: ${promTarde.toFixed(2)}`);
    console.log(`Promedio turno noche: ${promNoche.toFixed(2)}`);

    
    const mayores = [
        { turno: 'mañana', valor: promManana },
        { turno: 'tarde', valor: promTarde },
        { turno: 'noche', valor: promNoche }
    ].sort((a, b) => b.valor - a.valor);

    if (mayores[0].valor === mayores[1].valor) {
        console.log('\n¡Hay empate en los promedios más altos!');
    } else {
        console.log(`\nEl turno con mayor promedio de edad es: ${mayores[0].turno}`);
    }

    readline.close();
}

calcularPromedios();