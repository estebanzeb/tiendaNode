//Traigo de mongoose el modelo y el schema de datos
const {model, Schema}=require('mongoose');

//creo el esqueleto de datos que va a tener cada documento (bolsa) de mi colección
const Reserva=Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true,
    },
    telefonocliente:{
        type:Number,
        required:true
    },
    fechainicioreserva:{
        type:Number,
        required:true
    },
    fechafinalreserva:{
        type:Number,
        required:true
    },
    númerodepersonas:{
        type:Number,
        required:true
    },
    tipopaquete:{
        type:String,
        required:true
    }
});

module.exports=model('reservas',Reserva);