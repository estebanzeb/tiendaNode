//Importar de express las varibles rquest y response
const { request,response }=require('express');

//Importar el modelo de datos del API
const ReservaModelo=require('../models/ReservaModelo.js');


//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

async function buscarReserva(peticion=request,respuesta=response){

    let datosconsultados=await ReservaModelo.find();
                                            //findById("60aef6d922f4320dbc5c7156");
    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });
  
}

async function agregarReserva(peticion=request,respuesta=response){

    //recibir la peticion
    let datosFutbolista=peticion.body;

    // 
    let reserva=new ReservaModelo(datosFutbolista);
    //esperar a que se guarde
    await reserva.save();
    
    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con exito',
        datos:reserva
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosFutbolista=peticion.body;

    await ReservaModelo.findByIdAndUpdate(id,datosFutbolista);


    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con exito'
    });

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await ReservaModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada con exito'
    });

}

//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva
}