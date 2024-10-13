const { crearArchivo } = require('./helpers/multiplicar4');
const colors = require('colors');
const argv = require('./config/yargs2');

console.clear();
console.log(argv); // Verifica si argv está cargando correctamente

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')) // Verifica si nombreArchivo tiene el valor correcto
  .catch(err => console.error(err));
