"use strict"
const URL = "https://rickandmortyapi.com/api/character/"
const NUMBERPAGE = 5;
let currentInfo = {};
let paginacion = document.querySelector(".row .pagination");
let query = {
  name: "",
  status: "alive",
  currentpage: 1,
  blockpage: 1,
  totalpages: 1,
}

let cardsView = document.querySelector(".row.fichas");
document.querySelector("#searchButton").addEventListener("click",getData);

function getData() {
    query.name = document.querySelector("#icon_prefix").value;
    query.status = document.getElementById("status").checked?"alive":"die";
  
    /* if (document.querySelector("ul .active") != null){
      query.page = document.querySelector("ul .active").value;
    } else {
      query.page = "1";
    } */
    fetch(URL+"?name="+ query.name + "&status=" + query.status + "&page=" + query.page)
    .then (response=> response.json()
    .then (datos => UIrefresh(datos)))
}

function UIrefresh(datos) {
    console.dir(datos);
    query.totalpages = datos.info.pages;
    cardsView.innerHTML = "";
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

//paginacion
paginacion.innerHTML="";
    if (query.totalpages > 1 && !document.querySelector(".pagination li")) {
          paginacion.insertAdjacentHTML("beforeend",      
      `<li id="previusPage" class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
      <li class="active"><a href="#!">1</a></li>
      <li id="nextPage" class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>`
   );
     
        for (let i=query.currentpage*query.blockpage; i<=query.currentpage * query.blockpage + NUMBERPAGE ; i++) {
        if (i<= NUMBERPAGE*query.totalpages ) {
          document.querySelector("#nextPage").insertAdjacentHTML("beforebegin", `<li class="waves-effect"><a href="#!">${i}</a></li>`);
       }
}
 }

  if (query.currentpage < query.totalpages/NUMBERPAGE ){
  document.getElementById("nextPage").classList.remove("disabled");
  document.getElementById("nextPage").classList.add("waves-effect");
 };

  } // funcion uirefresh

paginacion.addEventListener("click", (event)=>{
  let target = event.target;
  if (target.tagName == "A") {
    query.page = target.textContent;
    paginacion.querySelector(".active").classList.remove("active");
    target.closest('li').classList.add("active");
    if (query.page == 1) {
      document.getElementById("previusPage").classList.add("disabled");
      document.getElementById("previusPage").classList.remove("waves-effect");
    } else {
      document.getElementById("previusPage").classList.remove("disabled");
      document.getElementById("previusPage").classList.add("waves-effect");
    }
    getData();
  }else {
  if (target.tagName == "I" && !target.closest("li").classList.contains("disabled")) {
    if (target.textContent == "chevron_left") {
      query.page = query.page-1;
      let currentPage = document.querySelector(".active");
      currentPage.classList.remove("active");
      currentPage.previousElementSibling.classList.add("active");
      if (query.page == 1) {
        document.getElementById("previusPage").classList.add("disabled");
        document.getElementById("previusPage").classList.remove("waves-effect");
      } else {
        document.getElementById("previusPage").classList.remove("disabled");
        document.getElementById("previusPage").classList.add("waves-effect");
      }
      getData();

    }
  }
  }

}
)
    