const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertirTemperatura() {
    readline.question('Ingrese la temperatura en grados Celsius: ', (celsius) => {
        celsius = parseFloat(celsius);

        if (isNaN(celsius)) {
            console.log('¡Error! Debe ingresar un número válido.');
            readline.close();
            return;
        }

        const fahrenheit = (celsius * 9/5) + 32;

        let mensaje;
        if (fahrenheit >= 14 && fahrenheit < 32) {
            mensaje = 'Temperatura baja';
        } else if (fahrenheit >= 32 && fahrenheit < 68) {
            mensaje = 'Temperatura adecuada';
        } else if (fahrenheit >= 68 && fahrenheit < 96) {
            mensaje = 'Temperatura alta';
        } else {
            mensaje = 'Temperatura desconocida';
        }

        console.log(`\n${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`);
        console.log(`Clasificación: ${mensaje}`);

        readline.close();
    });
}

convertirTemperatura();