/**
 * se agrega un describe para que la ayde del uso de la app help 
 * describa de mejor forma la apicacion
 */

const argv= require ('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe:'es la base da la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'bolean',
        demandOption: false,
       describe:'muestra la tabla en consola' 
    })  
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv
    //dando permisos de esprtacion

    module.exports=argv;