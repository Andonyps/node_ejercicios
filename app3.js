/**
 * Ejercicio- importar archivos a nuestros proyecto
 * utilizando el writeFileSync
 */
const fs = require('fs');


/**
 * En este ejercicio se desea evolucionar la aplicacion para que se pueda imprimir cualquier base 
 * para la tabla de multiplicar y luego de imprimir en consola se genere un archivo .txt con el nombre de la tabla y sus datos 
 * para poder crear y guardar datos en un archivo es necesario utilizar el paquete interno File system (fs) y el metodo writefilesync que es mucho
 * mas sencillo y optimo que el writefile
 */

const base = 16
let salida = '';

console.clear();
console.log('=================');
console.log(`    Tabla del: ${base}    `);
console.log('=================');

for(let i = 1; i <= 10; i++){
    salida += `${base} X ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida)


console.log(`tabla-${base}.txt creado con writeFileSync`);