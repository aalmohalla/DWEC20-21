"use strict";

//añadimos la transición de animación al boton de recarga
let refreshButton = document.querySelector("i.material-icons.refresh-image");
let avatar = document.querySelector("#avatar");
let imagenContainer = document.querySelector("#imagen");

avatar.addEventListener("mouseenter",(e)=>{
    if (e.target.tagName == "IMG" || e.target.tagName == "I" ) {
    avatar.classList.add("avatar-active");
    refreshButton.classList.add("refreshImage-active");
    }
});

avatar.addEventListener("mouseleave",()=>{
    avatar.classList.remove("avatar-active");
    refreshButton.classList.remove("refreshImage-active");
});

imagen.addEventListener("click",(e)=>{
    if (e.target.tagName == "IMG" || e.target.tagName == "I" ) {
        dataRefresh();
        avatar.classList.remove("avatar-active");
        refreshButton.classList.remove("refreshImage-active");
    }
});

function dataRefresh(){
    fetch("https://randomuser.me/api/1.3/")
    .then(response => response.json())
    .then(datos=>{
        dataUpdate(datos);
    })
}

function dataUpdate(datos){
    console.dir(datos);
    avatar.src = datos.results[0].picture.large;
}
