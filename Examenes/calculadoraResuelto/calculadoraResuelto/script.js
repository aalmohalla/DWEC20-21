"use strict";
const OPERADORES = ["+", "-", "*", "/"];
let pantalla = document.querySelector("#Pantalla");
let ansValue = 0;
let botones = document.querySelectorAll("#Teclado > button");

for (let boton of botones){

    switch(boton.textContent) {
        case "AC": boton.addEventListener("click", ()=>{
            pantalla.value = "";
        })
            break;
        case "CE":boton.addEventListener("click", ()=>{
            pantalla.value = pantalla.value.slice(0,-1);
        })
            break;
        case "Ans":boton.addEventListener("click", ()=>{
            pantalla.value += ansValue;
        })
            break;    
        case "=":boton.addEventListener("click", ()=>{
          let cadenaResultado = pantalla.value +"=" + eval(pantalla.value);
          pantalla.value = eval(pantalla.value);
          let contenidoTable = document.querySelector(".table-hover");
          contenidoTable.insertAdjacentHTML("afterbegin", `<tr>
          <td class="text-left">${cadenaResultado}</td>
          <td class="text-left"><button class="btn draw-border">ELIMINAR</button><button class="btn draw-border">RECUPERAR</button></td>
          </tr>`);
          let fila = contenidoTable.firstElementChild;
          let botones = fila.querySelectorAll("button");
          botones[0].addEventListener("click", () => fila.remove());
          botones[1].addEventListener("click", () =>{
            let operacionFila = fila.firstElementChild.textContent;
            pantalla.value = operacionFila.slice(operacionFila.indexOf("=")+1);
            contenidoTable.prepend(fila);
          }); 

        })
            break;
        default: boton.addEventListener("click", ()=>{
            if (!isNaN (boton.textContent)) {
            pantalla.value += boton.textContent;
            } else { 
                if (boton.textContent == ".") {
                    let esDecimal = false;
                    for (let i= pantalla.value.length-1; i>=1; i--){
                        if ( OPERADORES.includes(pantalla.value[i])) {
                            break;
                        }
                        if (pantalla.value[i] ==".") {
                            esDecimal = true;
                            break;
                        }
                    }
                    if (!esDecimal) pantalla.value += boton.textContent
                } else {
                    if (!OPERADORES.includes(pantalla.value[pantalla.value.length-1]) && pantalla.value !="")  pantalla.value += boton.textContent;
                }


            }
    })
        
    }
}