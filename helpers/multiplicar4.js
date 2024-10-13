const fs = require('fs');
const colors = require('colors'); // Estoy utilizando colors

// Función para crear el archivo
const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = '';
        // Genera la tabla de lo que se envíe en la base del 1 al 10
        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;     
        }

        // Si el parámetro listar existe, imprime en consola
        if (listar) {
            console.log('========================'.green);
            console.log(' Tabla del:'.green, colors.blue(base)); // Cambié esta línea
            console.log('========================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
