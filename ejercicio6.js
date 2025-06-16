const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuentoViaje() {
    console.log("--- Calculadora de Descuentos para Viajes ---\n");
    
    readline.question("Ingresa la ciudad de origen: ", (origen) => {
        readline.question("Ingresa la ciudad de destino: ", (destino) => {
            origen = origen.trim().toUpperCase();
            destino = destino.trim().toUpperCase();
            
            let descuento = 0;

            if (origen === "PALMA") {
                switch (destino) {
                    case "LA COSTA DEL SOL":
                        descuento = 5;
                        break;
                    case "PANCHIMALCO":
                        descuento = 10;
                        break;
                    case "PUERTO EL TRIUNFO":
                        descuento = 15;
                        break;
                }
            }

            console.log("\n--- Resultado ---");
            console.log(`Origen: ${origen}`);
            console.log(`Destino: ${destino}`);
            
            if (descuento > 0) {
                console.log(`¡Descuento aplicado!: ${descuento}%`);
            } else {
                console.log("No hay descuentos disponibles para esta ruta.");
            }

            readline.close();
        });
    });
}

calcularDescuentoViaje();