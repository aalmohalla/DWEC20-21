"use strict";

const MINAS = 6;


function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
function minasAdyacentes(tabla,fila,columna){
let resultado = 0;
let subFila = fila==0?fila:fila-1;
let subFilalimite = fila == tabla.length-1?fila-1:fila+1;
let subColumnalimite = columna==tabla[fila].length-1?columna:columna+1;
let subColumna = columna==0?columna:columna-1;
for (let i = subFila; i<=subFilalimite; i++){
    for ( let j = subColumna; j<=subColumnalimite; j++) {
        console.log ("fila:" + i + "columna" +j)
        if (tabla[i][j].mina) resultado++;
    }
}
return resultado;
}

function refreshView(tabla){
    document.body.innerHTML="";
    let tablaDOM = document.createElement("table");
    for (let i=0; i< tabla.length; i++){
        let row = document.createElement("tr");
        tablaDOM.append(row);
        for (let j=0; j< tabla[i].length; j++){
            let cell = document.createElement("td");
            if (tabla[i][j].mina) {
                cell.innerText="M"
            } else {
                    cell.innerText= tabla[i][j].numero;
                };
            row.append(cell);

        }
    }
    document.body.append(tablaDOM);
}

let tableroMod = [];

function Celda(minada)  {
    this.mina = minada;
    this.mostrada=false;
    this.numero = 0;
}

//Creo la estructura
for (let i=0; i<=5; i++){
    tableroMod[i] = [];
    for (let j = 0; j<=5; j++){
        tableroMod[i].push(new Celda(false));
    }
}

//Pongo minas aleatorias

    for (let m=0; m<MINAS; m++){
        let randomFila = randomInteger(0,4);
        let randomColumna = randomInteger(0,4);
        if (!tableroMod[randomFila][randomColumna].mina) {
            tableroMod[randomFila][randomColumna].mina = true;
        } else {
            m--
        }
    }

//Calculo los valores de las celdas adyacentes

for( let i = 0; i< tableroMod.length; i++){
    for (let j = 0; j< tableroMod[i].length; j++){
        if(!tableroMod[i][j].minada) tableroMod[i][j].numero=minasAdyacentes(tableroMod,i,j)

    }
}

refreshView(tableroMod);

