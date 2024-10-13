/**
 * Ejercicio - conversion a funcion promesa en multiplicar2.js
 * 
 * aca demanda a llamar la destructuracion de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivo 
 * aca de transformo en promesas las funciones flecha
 * 
 */

const { crearArchivo } = require('./helpers/multiplicar2')

/**
 * Se creo la carpeta helpers para crear toda la logica de la aplicacion en un archivo dentro de esta carpeta llamada multiplicar.js
 */

console.clear();

const base = 31


/**
 * cuando se utiliza el .then sirve para ejecutar el resolve de la promesa(exito)
 * cuando se utiliza el .catch sirve para ejecutar el reject de la promesa(error)
 */

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))