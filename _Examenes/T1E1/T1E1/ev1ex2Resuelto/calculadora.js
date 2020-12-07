"use strict";

let pantalla = document.querySelector("#Pantalla");
let teclado = document.querySelector("#Teclado");
let botones = document.querySelectorAll("button");
let tabla = document.querySelector(".table-fill")
let historial = [];

let esDecimal = false;
let tieneOperador = false;

botones.forEach((boton)=>{
    switch(boton.textContent){
        case "AC": boton.addEventListener("click", ()=>{

        })
        break;
        case "CE": boton.addEventListener("click", ()=>{
            
        })
        break;
        case "Ans": boton.addEventListener("click", ()=>{
            
        })
        break;
        case "=": boton.addEventListener("click", ()=>{
            let operacion = pantalla.value;
            pantalla.value = eval(pantalla.value);
            operacion += "=" + pantalla.value;
            historial.push(operacion);
            tableUpdate(historial,tabla);
        })
        break;
        case ".":  boton.addEventListener("click", ()=>{
            
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

function tableUpdate(historial,tabla) {
    
}