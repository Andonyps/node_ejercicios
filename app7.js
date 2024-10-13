/**
 * ejercicio recibir informacion desde la linea de comandos 
 * aca demanda a llamar la destructuracion de multiplicar 
 * ejemplos de trabajar con linea de comandos por ejemplo nodemon version 
 * se ejecuto el comando principal de nodemon y estamos enviando la bandera 
 * --version la aplicacion sabe que hacer cuando se envia la bandera no se 
 * ejecuta el comando de nodemon si no que se ejecuta la informacion de la version
 * 
 */

const { crearArchivo } = require('./helpers/multiplicar3')

/**
 * codigo comentado para hacer el ejercicio de el progress.argv
 * que se quiere hacer que trabajamos con la linea de comandos para operar la aplicacion 
 * por ejemplo utilizando node app.js base 3 por ejemplo 
 * base 3 limite 10 
 * que pasa si yo en estos comentos escribo node app6 base 9
 * 
 */

console.clear();

//const base = 2

//crearArchivo(base)
//  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//  .catch(err => console.log(err))

console.log(process.argv); //Imprime los procesos que vienen de la consola 

/**
 * codigo comentado para hacer el ejercicio process.argv
 * probar agregando en consola node app7 --base5
 * 
 * 
 */

const [, , arg3='base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
console.log(base);

