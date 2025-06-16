const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function analizarNumeros() {
    let contador = 0;
    let numeros = [];
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let sumaPares = 0;

    function pedirNumero() {
        if (contador < 10) {
            readline.question(`Ingrese el número ${contador + 1} de 10: `, (numero) => {
                numero = parseInt(numero);

                if (isNaN(numero)) {
                    console.log("¡Debe ingresar un número válido!");
                    pedirNumero();
                    return;
                }

                numeros.push(numero);

                // Contar positivos/negativos
                if (numero < 0) negativos++;
                else if (numero > 0) positivos++;

                // Contar múltiplos de 15
                if (numero % 15 === 0) multiplos15++;

                // Sumar pares
                if (numero % 2 === 0) sumaPares += numero;

                contador++;
                pedirNumero();
            });
        } else {

            console.log("\n--- Resultados ---");
            console.log(`Cantidad de valores negativos: ${negativos}`);
            console.log(`Cantidad de valores positivos: ${positivos}`);
            console.log(`Cantidad de múltiplos de 15: ${multiplos15}`);
            console.log(`Suma acumulada de números pares: ${sumaPares}`);
            readline.close();
        }
    }

    console.log("Ingrese 10 números enteros:");
    pedirNumero();
}

analizarNumeros();