const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarTablaMultiplicar() {
    readline.question('Ingrese un número para generar su tabla de multiplicar (1 al 10): ', (numero) => {
        numero = parseInt(numero);

        if (isNaN(numero)) {
            console.log('¡Error! Debe ingresar un número válido.');
            readline.close();
            return;
        }

        console.log(`\nTabla de multiplicar del ${numero}:`);
        console.log('------------------------');

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }

        readline.close();
    });
}

mostrarTablaMultiplicar();