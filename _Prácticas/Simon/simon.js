"use strict";

let colors = ["green","yellow","red","blue"];
let frequency = [250,400,550,700];
let cpuTurn = false;
let cpuGame = [];
//v.start(a.currentTime)
//  v.stop(a.currentTime+duration*0.001);
let a=new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em
let v;
let botones = document.querySelectorAll(".unclick");
let turnoCPU = false;
let opciones = {
    jugada : [], // vector con las jugadas
    numeroAuto : 0, //iteracion automatica del PC
    tiempo : 1000, //tiempo inicial que se muestra cada jugada
}


function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
function botonAleatorio() {
    let random = randomInteger(0,3);
    return(botones[random]);
}
//quitar el letrero y el borroso del fondo cuando se haga click en el comienzo
document.querySelector("#start").addEventListener("click",(e)=>{
    
    e.target.style.display ="none";
    document.querySelector("#simon").classList.remove("blur");
    document.querySelector("#count").classList.remove("blur");
    startGame();
});

function mouseDownColor(button){
    if (!turnoCPU) {
        button.classList.toggle("click");
        v=a.createOscillator();
        v.connect(a.destination);
        v.frequency.value=frequency[colors.indexOf(button.id)];
        v.type="square";
        v.start();
    }
}

function mouseUpColor(button){
    if (!turnoCPU) {
        button.classList.toggle("click");
        v.stop(a.currentTime);
        if (button === opciones.jugada[opciones.numeroAuto]) {
            opciones.numeroAuto++;
            if (opciones.numeroAuto == opciones.jugada.length){
                alert (" turno acertado");
                startGame();
            }
        }else {
            alert ("has perdido");
        }
    }
}
document.querySelector("#simon").addEventListener("mousedown",(event)=>{
    if (!cpuTurn && colors.includes(event.target.id)) {
       mouseDownColor(event.target);
             
    }
})

document.querySelector("#simon").addEventListener("mouseup",(event)=>{
    if (!cpuTurn && colors.includes(event.target.id)) {
        mouseUpColor(event.target);
       
    }
});

function viewCPU() {
        let boton = opciones.jugada[opciones.numeroAuto];
        boton.classList.toggle("click");
        v=a.createOscillator();
        v.connect(a.destination);
        v.frequency.value=frequency[colors.indexOf(boton.id)];
        v.type="square";
        v.start();
        setTimeout(()=>{
            boton.classList.toggle("click");
            v.stop(a.currentTime);
            opciones.numeroAuto++;
            if (opciones.numeroAuto < opciones.jugada.length) {
                setTimeout(()=>viewCPU(),150);
            } else {
                opciones.numeroAuto = 0;
                turnoCPU = false;
            }
        },opciones.tiempo)
    }


function startGame(){

        opciones.jugada.push(botonAleatorio()); //añadimos una jugada al vector de jugadas
        opciones.numeroAuto = 0; 
        if (opciones.tiempo >250 ) opciones.tiempo = opciones.tiempo - opciones.jugada.length*10; // reduccion de tiempo en cada turno
        turnoCPU = true; //bloqueamos los eventos de entrada del usuario
        viewCPU(); // se muestra en la vista todas las jugadas en funcion del tiempo
}