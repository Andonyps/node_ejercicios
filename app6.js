/**
 * Ejercicio conversion a funcion promesa a Async en multiplicar3.js
 * 
 * aca demanda a llamar la destructuracion de multiplicar3.js
 * que ahora ya tiene permisos para importar creararchivo
 * se transformo la promesa en una funcion tipo async una funcion 
 * asinciona para que se ejecute mas optimamente que la promesa
 * esta funcion async maneja el exit on con el try y el error con catch
 */

const { crearArchivo } = require('./helpers/multiplicar3')

/**
 * Se creo la carpeta helpers para crear toda la logica 
 * de la aplicacion en un archivo dentro de esta carpeta llamada multiplicar
 */

console.clear();

const base = 2

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))


    /**
     * El proyecto posterior trata de crear documentacion y poder trabajar desde la consola 
     * esta aplicacion es decir, que por ejemplo en la linea de comandos se ingresa lo siguiente 
     * node app7 -- base limit-= 12  entonces para las tablas del 9 al 12 por ejemplo  tambien se puede usar
     * para saber informacion de la app por ejemplo su version o banderas que se pueden utilizar en la aplicacion
     */