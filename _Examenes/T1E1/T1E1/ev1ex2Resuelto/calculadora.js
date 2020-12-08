"use strict";

let pantalla = document.querySelector("#Pantalla");
let teclado = document.querySelector("#Teclado");
let botones = document.querySelectorAll("button");
let tabla = document.querySelector(".table-fill")
const HISTORIALITEMS = 5;

let esDecimal = false;
let tieneOperador = false;
let ultimoResultado = 0;


function tableAdd(operacion) {
    tabla.insertAdjacentHTML("beforeend", `<tr>
    <td class="text-left">${operacion}</td>
    <td class="text-left"><button class="btn draw-border">ELIMINAR</button><button class="btn draw-border">RECUPERAR</button></td>
    </tr>`);
    let filaInsertada = tabla.lastElementChild;
    let boton = filaInsertada.querySelector("button");
    boton.addEventListener("click", () => filaInsertada.remove());
    boton.nextElementSibling.addEventListener("click", ()=> {
        let operacion = filaInsertada.querySelector("td").textContent;
        operacion = operacion.slice(operacion.indexOf("=")+1);
        pantalla.value = operacion;
    })
 
 }

botones.forEach((boton)=>{
    switch(boton.textContent){
        case "AC": boton.addEventListener("click", ()=>{
            pantalla.value = "";
        })
        break;
        case "CE": boton.addEventListener("click", ()=>{
            pantalla.value = pantalla.value.slice(0,pantalla.value.length-1);
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
            tableAdd(operacion);
        })
        break;
        case ".":  boton.addEventListener("click", ()=>{
            if (!esDecimal) {
                pantalla.value += boton.value;
                esDecimal = true;
            }
        })
        break;
        case "+":
        case "-":
        case "/":
        case "*":
        case "%": boton.addEventListener("click", ()=>{
            if (!tieneOperador) {
                pantalla.value += boton.value;
                tieneOperador = true;
                esDecimal= false;
            }
        })
        break;
        default: boton.addEventListener("click", ()=>{
            pantalla.value += boton.value;
            tieneOperador = false;
        })
    }
    
    }
);
