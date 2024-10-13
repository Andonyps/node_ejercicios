/**
 * ejercicio - inicio de nuestro proyecto, crear una aplicacion que imprima en consola
 * la tabla del cinco, trate de realizarla por sus medios y compare resultados de su logica contra lo resuelto aca
 * 
 * 
 * 
 * hacer un programa en consola que imprima la 
 * tabla del cinco de forma automatica
 * 5 X 1 = 5
 * 5 X 2 = 10
 */


/**
 * para ejecutar la aplicacion es necesario llevar la consola a la carpeta donde se encuentra este proyecto 04-fundamentos y ejecutar el siguiente comando 
 * 
 * node app
 * 
 * 
la variable base sirve para indicar sobre que base vamos a realizar la tabla de mutliplicacar
 */








let base = 5
console.clear(); 

const tabla = (base) => {
    let resultado = ''
    console.log(`----Tabla del ${base} -----`);
    for (let i = 1; i <= 10; i++){
        resultado = resultado + `${base} X ${i} = ${base * i}\n`;
    }
    
    return resultado
}

console.log(tabla(base));