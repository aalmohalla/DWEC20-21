"use strict"
const URL = "https://rickandmortyapi.com/api/character/?name="

let cardsView = document.querySelector(".row.fichas");
document.querySelector("#searchButton").addEventListener("click",getData);

function getData() {
    fetch(URL+document.querySelector("#icon_prefix").value + "&status=alive")
    .then (response=> response.json()
    .then (datos => UIrefresh(datos)))
}

function UIrefresh(datos) {
    console.dir(datos);
       
    datos.results.forEach(element => {
        cardsView.insertAdjacentHTML("beforeend", 
    ` <div class="col s6 l4">
    <div class="card">
      <div class="card-image">
        <img src=${element.image}>
        <span class="card-title">${element.name}</span>
      </div>
      <div class="card-content">
        <ul>
            <li>Nombre: ${element.name}</li>
        </ul>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
    ` )
        
    });
}