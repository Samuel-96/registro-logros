import {guardarDatos, cargarDatos} from "./localStorage.js";

//declaracion de variables
const datosJson = [];
const tablaJugadores = document.querySelector(".tabla-cada-jugadores");
const tablaMech = document.querySelector(".tabla-cada-mech");
const tablaAño = document.querySelector(".tabla-cada-año");
const tablaMes = document.querySelector(".tabla-cada-mes");
const tablaCorrupcion = document.querySelector(".tabla-cada-fichas-corrupcion");
const tablaPareja = document.querySelector(".tabla-cada-pareja");
const tablaPuntuacion = document.querySelector(".tabla-cada-puntuacion");
const tablaEliminarCorrupcion = document.querySelector(".tabla-eliminar-corrupcion");
const tablaGloria = document.querySelector(".tabla-gloria");

const tablas = [tablaJugadores,tablaMech,tablaAño,tablaMes,tablaCorrupcion,tablaPareja,tablaPuntuacion,tablaEliminarCorrupcion,tablaGloria]

function recogerDatos()
{
    let infoTabla = [], fechasTablas = [], nombresTablas = []
    let fechasJugadores, nombresJugadores;

    for(let i = 0; i < tablas.length; i++)
    {
        fechasJugadores = Array.from(tablas[i].querySelectorAll(".fecha"));
        nombresJugadores = Array.from(tablas[i].querySelectorAll(".input-nombre"));

        fechasJugadores.forEach(fecha => {fechasTablas.push(fecha.value)})
        nombresJugadores.forEach(nombre => {nombresTablas.push(nombre.value)})

        infoTabla.push(fechasTablas, nombresTablas);
        datosJson.push(infoTabla);
        infoTabla = [], fechasTablas = [], nombresTablas = [];
    }
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
    let datosTabla, fechasTabla, nombresTabla, fechasJugadores, nombresJugadores;

    if(datosCargados.length > 0)
    {
        console.log(datosCargados);

        for(let i = 0; i < tablas.length; i++)
        {
            datosTabla = datosCargados[i];
            fechasTabla = datosTabla[0];
            nombresTabla = datosTabla[1];

            fechasJugadores = tablas[i].querySelectorAll(".fecha");
            nombresJugadores = tablas[i].querySelectorAll(".input-nombre");

            fechasJugadores.forEach((fecha, index) => {fecha.value = fechasTabla[index];});
            nombresJugadores.forEach((nombre, index) => {nombre.value = nombresTabla[index]});
        }
    }
    
});