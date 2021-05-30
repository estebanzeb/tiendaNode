//const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')
//const argv = yargs(hideBin(process.argv)).argv
/*
console.log(argv);

console.log(argv.cesde1);
console.log(argv.cesde2);

console.log(argv.cesde1+argv.cesde2);

let nombre = argv.nombre;
let edad =argv.edad;
let estatura = argv.estatura

//armar padawan

function crearAprendiz(nombre,edad,estatura){
    let aprendiz = {
        nombre:nombre,
        edad:edad,
        estatura:estatura,
    }
    console.log(aprendiz);
}

crearAprendiz(nombre, edad, estatura);*/

//Ctrn ñ "TERMINAL" 
//Variable de entorno: son datos que no estan directamente asociadas a mi progrma si no al entorno donde se ejecuta mi programa
 
 
//Importo el modelo del servidor
const ServidorModelo = require('./models/ServidorModelo.js');

//Se trae el paquete de enviroment
require('dotenv').config();

//Instancio (Saco una fotocopia de mi clase servidormodelo)
let servidor = new ServidorModelo();

//Levanto el servidor
servidor.despertarServidor();

//Puede haber un conlflicto por los puertos