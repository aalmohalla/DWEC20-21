"use strict";

let pantalla = document.querySelector("#Pantalla");
let teclado = document.querySelector("#Teclado");
let botones = document.querySelectorAll("button");
let tabla = document.querySelector(".table-fill");
//let tablatbody = tabla.querySelector("tbody");

let esDecimal = false;
let tieneOperador = false;
let ultimoResultado = 0;

function tableAdd(operacion,tbody) {
    tbody.insertAdjacentHTML("beforeend", `<tr><td class="text-left">${operacion}</td><td class="text-left"><button class="btn draw-border">ELIMINAR</button><button class="btn draw-border">RECUPERAR</button></td> </tr>`);
    let filaInsertada = tbody.lastElementChild;
    let boton = filaInsertada.querySelector("button");
    boton.addEventListener("click", () => filaInsertada.remove()); //boton eleminar fila
    boton.nextElementSibling.addEventListener("click", ()=> { //boton recuperar
        let operacion = filaInsertada.querySelector("td").textContent;
        pantalla.value = operacion.slice(operacion.indexOf("=")+1);
        tbody.prepend(filaInsertada);
    })
  }

botones.forEach((boton)=>{
    switch(boton.textContent){
        case "AC": boton.addEventListener("click", ()=>{
            pantalla.value = "";
        })
        break;
        case "CE": boton.addEventListener("click", ()=>{
            if (pantalla.value.slice(-1) == ".") esDecimal = false; // si borro un punto ya no es decimal
            pantalla.value = pantalla.value.slice(0,-1);
            if (isNaN(pantalla.value.slice(-1))) tieneOperador = true; //si el ultimo valor es un operador no se admite otro seguido
        })
        break;
        case "Ans": boton.addEventListener("click", ()=>{
            pantalla.value = ultimoResultado;
        })
        break;
        case "=": boton.addEventListener("click", ()=>{
            let operacion = pantalla.value;
            pantalla.value = eval(pantalla.value);
            ultimoResultado = pantalla.value;
            operacion += "=" + pantalla.value;
            tableAdd(operacion,tabla.querySelector("tbody"));
        })
        break;
        case ".":  boton.addEventListener("click", ()=>{
            if (!esDecimal) {
                pantalla.value += boton.value;
                esDecimal = true;
            }
        })
        break;
        default: boton.addEventListener("click", ()=>{
            if (isNaN(boton.value) && !tieneOperador) { //si es un operador y no tenemos lo añadimos
                pantalla.value += boton.value;
                tieneOperador = true; //ya tenemos operador
                esDecimal= false; //nuevo numero no puede ser decimal
            } else { 
                if ( !isNaN(boton.value)){ //si es un número, podria ser un operador si ya tiene operador
                pantalla.value += boton.value;
                tieneOperador = false;
                }
            }
        })
    }
   }
);
