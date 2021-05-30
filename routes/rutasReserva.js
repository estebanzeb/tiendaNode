//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { buscarReserva }= require('../controllers/controladorReserva.js');
const { agregarReserva }= require('../controllers/controladorReserva.js');
const { editarReserva }= require('../controllers/controladorReserva.js');
const { eliminarReserva }= require('../controllers/controladorReserva.js');

//IMPORTAR LAS VALIDACIONES
const {validarPeticion}=require('../validations/validaciones.js');

//IMPORTAR EL METODO CHECK DEL EXPRESS VALIDATOR
const {check}=require('express-validator');

//CREAR LA LISTA DE VALIDACIONES (arreglo)
let validaciones=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('apellido',"este campo es obligatorio").not().isEmpty(),
    check('telefonocliente',"este campo es obligatorio").not().isEmpty(),
    check('fechainicioreserva',"este campo es obligatorio").not().isEmpty(),
    check('fechafinalreserva',"este campo es obligatorio").not().isEmpty(),
    check('númerodepersonas',"este campo es obligatorio").not().isEmpty(),
    check('tipopaquete',"este campo es obligatorio").not().isEmpty(),
    validarPeticion

);

//PERSONALIZO MIS RUTAS
const rutas=Router();

//LISTADO DE RURAS
//Antes de llamar al controlodar llamamos a las validaciones
rutas.get('/reserva',buscarReserva);
rutas.post('/reserva/nuevo',validaciones,agregarReserva);
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva)

//EXPORTO LAS RUTAS
module.exports=rutas;