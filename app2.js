//Ejercicio  - Requerir paquetes internos
//Importar archivos a nuestro proyecto utilizando writefile
const fs = require('fs'); //requiere para poder operar archivos


/**En este ejercicio se desea evolucionar la aplicacion para que 
 * se pueda imprimir cualquier base para la tabla de multiplicar 
 * y luego de imprimir en consola se genere un archivo .txt con el nombre de la tabla y sus datos 
 * para poder crear y guardar datos en un archivo es necesario utilizar el paquete interno 
 * file system (fs) y el metodo writefile
 */

/**
 * algo interesante de node es que podemos operar archivos es decir que podemos 
 * crear modificar y eliminar archivos por medio de node 
 */

/**
 * En este caso se pretende imprimir la tabla de multiplicar en un archivo visitar la pagina oficial de note.
 */

const base = 14
let salida = '';

console.clear();
console.log('=====================');
console.log(`     Tabla del: ${base}     `);
console.log('=====================');

for(let i = 1; i <= 10; i++){
    salida += `${base} X ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado con writeFile`);
})