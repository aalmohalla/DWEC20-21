"use strict";
let loader = document.querySelector(".loader");
let vistaDatos = document.querySelector(".principal");
function getJoke() {
    vistaDatos.hidden = true;
    loader.hidden = false;
    fetch("https://api.chucknorris.io/jokes/random")
    .then( result => { console.log(result.body);
                        return result.json()
    })
    .then( result => viewRefresh(result))
    .catch(error => alert(error))
    .finally( () => {
         loader.hidden = true;
         vistaDatos.hidden = false;
    });
}


function viewRefresh(datos){

    let cajaimagen = document.querySelector(".imagen");
    cajaimagen.innerHTML = "";
    let frase = document.querySelector(".frase");
    let imagen = document.createElement("img");
    imagen.src= datos.icon_url;
    frase.textContent = datos.value;
    cajaimagen.append(imagen);
}

document.querySelector(".myButton").addEventListener("click",getJoke);
getJoke();