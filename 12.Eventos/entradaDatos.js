"use strict";

let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", ()=>{
    let form = document.querySelector(".product-form");
    let entradas = form.querySelectorAll("input");
    let objEntrada={};
    entradas.forEach((entrada) =>{
        objEntrada[entrada.name] = entrada.value;
        entrada.value="";
    });
    objEntrada["descripcion"]=form.querySelector("textarea").value;
    form.querySelector("textarea").value ="";
    console.dir(objEntrada);
    let htmlproducto = `<div id="producto" class="product-profile">
                <h2 class="fullname">${objEntrada.nombre}</h2>
                <p>${objEntrada.descripcion}</p>
                <h3>Precio: ${objEntrada.precio}</h3>
            </div>`;
    
    document.querySelector(".display-product").insertAdjacentHTML("beforeend",htmlproducto);
})