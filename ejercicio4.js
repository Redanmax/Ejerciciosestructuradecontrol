const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarMayor() {

    readline.question('Ingrese el primer número entero: ', (num1) => {
        readline.question('Ingrese el segundo número entero: ', (num2) => {
 
            const a = parseInt(num1);
            const b = parseInt(num2);

            if (a > b) {
                console.log(`El número mayor es: ${a}`);
            } else if (b > a) {
                console.log(`El número mayor es: ${b}`);
            } else {
                console.log("Los números son iguales");
            }


            readline.close();
        });
    });
}

encontrarMayor();