import {guardarDatos, cargarDatos} from "./localStorage.js";

//declaracion de variables
const datosJson = [];
const tablaJugadores = document.querySelector(".tabla-cada-jugadores");
const tablaMech = document.querySelector(".tabla-cada-mech");
const tablaAño = document.querySelector(".tabla-cada-año");
const tablaMes = document.querySelector(".tabla-cada-mes");
const tablaCorrupcion = document.querySelector(".tabla-cada-fichas-corrupción");
const tablaPareja = document.querySelector(".tabla-cada-pareja");
const tablaPuntuacion = document.querySelector(".tabla-cada-puntuación");
const tablaEliminarCorrupcion = document.querySelector(".tabla-eliminar-corrupción");
const tablaGloria = document.querySelector(".tabla-gloria");

function recogerDatos()
{
    let infoTabla = [], fechasTablas = [], nombresTablas = []
    
    //obtenemos los inputs de la tabla
    let fechasJugadores = Array.from(tablaJugadores.querySelectorAll(".fecha"));
    let nombresJugadores = Array.from(tablaJugadores.querySelectorAll(".input-nombre"));

    //se guardan en el array
    fechasJugadores.forEach(fecha => {fechasTablas.push(fecha.value)})
    nombresJugadores.forEach(nombre => {nombresTablas.push(nombre.value)})
    infoTabla.push(fechasTablas, nombresTablas);
    datosJson.push(infoTabla);

    //siguiente tabla
    infoTabla = [], fechasTablas = [], nombresTablas = [];
    fechasJugadores = Array.from(tablaMech.querySelectorAll(".fecha"));
    nombresJugadores = Array.from(tablaMech.querySelectorAll(".input-nombre"));

    fechasJugadores.forEach(fecha => {fechasTablas.push(fecha.value)})
    nombresJugadores.forEach(nombre => {nombresTablas.push(nombre.value)})
    infoTabla.push(fechasTablas, nombresTablas);
    datosJson.push(infoTabla);
}

window.addEventListener("beforeunload", () => {
    
    recogerDatos(); //recogemos todos los datos de las tablas y los guardamos en datosJson

    if(datosJson.length > 0)
    {
        guardarDatos(datosJson); //ahora los guardamos en localStorage
    }
});

window.addEventListener("load", () => {
    const datosCargados = cargarDatos();
    if(datosCargados.length > 0)
    {
        console.log(datosCargados);

        //primera tabla
        let datosTabla = datosCargados[0];
        let fechasTabla = datosTabla[0];
        let nombresTabla = datosTabla[1];

        let fechasJugadores = tablaJugadores.querySelectorAll(".fecha");
        let nombresJugadores = tablaJugadores.querySelectorAll(".input-nombre");

        fechasJugadores.forEach((fecha, index) => {fecha.value = fechasTabla[index];});
        nombresJugadores.forEach((nombre, index) => {nombre.value = nombresTabla[index]});

        //segunda tabla
        datosTabla = datosCargados[1];
        fechasTabla = datosTabla[0];
        nombresTabla = datosTabla[1];

        fechasJugadores = tablaMech.querySelectorAll(".fecha");
        nombresJugadores = tablaMech.querySelectorAll(".input-nombre");

        fechasJugadores.forEach((fecha, index) => {fecha.value = fechasTabla[index];});
        nombresJugadores.forEach((nombre, index) => {nombre.value = nombresTabla[index]});
    }
    
});