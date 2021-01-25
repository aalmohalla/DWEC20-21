"use strict"
const URL = "https://rickandmortyapi.com/api/character/"
const NUMBERPAGE = 5;
let currentInfo = {};
let paginacion = document.querySelector(".row .pagination");
let paginacionLinks = document.getElementsByClassName("pageLink");
let query = {
  name: "",
  status: "alive",
  currentpage: 1, // pagina actual
  blockpage: 1, // bloque de páginas en el que se encuentra
  totalpages: 1, // numero de paginas
  pagination: false, // existe paginacion en el interface?
}

let cardsView = document.querySelector(".row.fichas");
document.querySelector("#searchButton").addEventListener("click",()=>{
  paginacion.innerHTML="";
  query.pagination = false;
  query.page = 1;
  getData();
 });

function getData() {
    query.name = document.querySelector("#icon_prefix").value;
    query.status = document.getElementById("status").checked?"alive":"die";
  
    /* if (document.querySelector("ul .active") != null){
      query.page = document.querySelector("ul .active").value;
    } else {
      query.page = "1";
    } */
    fetch(URL+"?name="+ query.name + "&status=" + query.status + "&page=" + query.page)
    .then (response=> response.json())
    .then (datos => UIrefresh(datos))
    
}


function UIrefresh(datos) {
    console.dir(datos);
    query.totalpages = datos.info.pages;
    cardsView.innerHTML = "";
    datos.results.forEach(element => {
        cardsView.insertAdjacentHTML("beforeend", 
    ` <div class="col s6 l4" draggable>
    <div class="card">
      <div class="card-image">
        <img src=${element.image}>
        <i class="material-icons moveicon">zoom_out_map</i>
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
    if (query.totalpages > 1 && !query.pagination) {
      addPagination();
    }

} // funcion uirefresh


function addPagination(){
  //paginacion



  
  query.pagination = true;
  paginacion.insertAdjacentHTML("beforeend",      
`<li id="previusPage" class="wave-effects"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
<li class="active pageLink"><a href="#!">1</a></li>
<li id="nextPage" class="wave-effects"><a href="#!"><i class="material-icons">chevron_right</i></a></li>`
);

  for (let i=2; i<=query.totalpages ; i++) {
  if (i<= NUMBERPAGE) {
    document.querySelector("#nextPage").insertAdjacentHTML("beforebegin", `<li class="waves-effect pageLink"><a href="#!">${i}</a></li>`);
 } else {
  document.querySelector("#nextPage").insertAdjacentHTML("beforebegin", `<li class="waves-effect hiddenpage pageLink"><a href="#!">${i}</a></li>`);

 }
}
}


paginacion.addEventListener("click", (event)=>{
  let target = event.target;
  if (target.tagName == "A") {
    paginacion.querySelector(".active").classList.remove("active");
    target.closest('li').classList.add("active");
    query.page = target.textContent;
    getData();
  }else {
  if (target.tagName == "I" && !target.closest("li").classList.contains("disabled")) {
    if (target.textContent == "chevron_left" && query.blockpage>1) query.blockpage--;
    if (target.textContent == "chevron_right" && query.blockpage<Math.ceil(query.totalpages/NUMBERPAGE)) query.blockpage++;
    updatePagination();
     {
        getData();
    }
  }
  }
}
) ;

function updatePagination(){
  let maxRange = NUMBERPAGE * query.blockpage;
  let minRange = 1+ NUMBERPAGE * (query.blockpage-1);
  for (let link of paginacionLinks) {
    if(link.children[0].textContent >= minRange && link.children[0].textContent <= maxRange) {
      link.classList.remove("hiddenpage");
    } else {
      link.classList.add("hiddenpage");
    }
  }
}


//arrastrar y soltar

cardsView.addEventListener("mousedown",(event)=>{
  let target = event.target;
  if(target.classList.contains("moveicon")){
    target.closest(".draggable").style.display = hidden;

  }


})


/* 
let btn = document.querySelector('.add');
let remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

btn.addEventListener('click', addNewItem);
 */