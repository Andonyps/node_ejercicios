const fs = require('fs');
const PDFDocument = require('pdfkit');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        for (let numeroBase = base; numeroBase <= hasta; numeroBase++) {
            let consola = '';
            let salida = '';


            for (let i = 1; i <= 10; i++) {
                salida += `${numeroBase} x ${i} = ${numeroBase * i}\n`;
                consola += `${numeroBase} ${'x'.green} ${i} ${'='.green} ${numeroBase * i}\n`;
            }


            if (listar) {
                console.log('========================'.green);
                console.log(`     Tabla del: ${colors.blue(numeroBase)}`.green);
                console.log('========================='.green);
                console.log(consola);
            }


            const doc = new PDFDocument();
            const filePath = `./salida/tabla-${numeroBase}.pdf`;
            doc.pipe(fs.createWriteStream(filePath));

            doc.fontSize(20).text(`Tabla de multiplicar del ${numeroBase}`, {
                align: 'center'
            });
            doc.moveDown();
            doc.fontSize(16).text(salida);

            doc.end();
        }


        return `Archivos PDF creados desde la tabla del ${base} hasta la del ${hasta}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
