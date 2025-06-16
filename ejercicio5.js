const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento() {
    console.log("Modelos disponibles:");
    console.log("1. FORD FIESTA (5% descuento)");
    console.log("2. FORD FOCUS (10% descuento)");
    console.log("3. FORD ESCAPE (20% descuento)\n");

    readline.question("Selecciona el número del modelo (1-3): ", (opcion) => {
        let modelo = "";
        let descuento = 0;

        switch (opcion) {
            case "1":
                modelo = "FORD FIESTA";
                descuento = 5;
                break;
            case "2":
                modelo = "FORD FOCUS";
                descuento = 10;
                break;
            case "3":
                modelo = "FORD ESCAPE";
                descuento = 20;
                break;
            default:
                console.log("\n¡Opción inválida! Debes elegir 1, 2 o 3.");
                readline.close();
                return;
        }

        console.log("\n----- RESULTADO -----");
        console.log(`Modelo seleccionado: ${modelo}`);
        console.log(`Descuento aplicado: ${descuento}%`);
        readline.close();
    });
}

calcularDescuento();