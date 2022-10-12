import { getData } from "../services/service"; //importa los datos de service, es decir, el json.
import { printBreeds } from "./print";

const button = document.querySelector("#search"); //selecciona el boton por su id


button.addEventListener('click', async (event) => {  // genera el evento click del boton 
    const size = document.querySelector("#size");   //selecciona los select de mi formulario html
    const hair = document.querySelector("#hair");
    const activity = document.querySelector("#activity");


    const breeds = await getData("breeds");  //obtiene los datos del json a traves del servicio

    const filteredBreeds = breeds.filter((breed) => {  //filtra los objetos del json para darme el que yo necesite
        return breed.size == size.value 
            && breed.hair == hair.value 
            && breed.activity == activity.value;
    })
   
   printBreeds(filteredBreeds); //llamada de la funcion de print.js para imprimir los valores adquiridos en el filtrado.
});

