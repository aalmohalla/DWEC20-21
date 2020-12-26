"use strict";

let colors = ["green","yellow","red","blue"];
let frequency = [250,400,550,700];
let cpuTurn = false;
let cpuGame = [];
//v.start(a.currentTime)
//  v.stop(a.currentTime+duration*0.001);
let a=new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em
let v;

//quitar el letrero y el borroso del fondo cuando se haga click en el comienzo
document.querySelector("#start").addEventListener("click",(e)=>{
    e.target.style.display ="none";
    document.querySelector("#simon").classList.remove("blur");
    document.querySelector("#count").classList.remove("blur");
    startGame();
});

function mouseDownColor(button){
    button.classList.toggle("click");
    v=a.createOscillator();
    v.connect(a.destination);
    v.frequency.value=frequency[colors.indexOf(button.id)];
    v.type="square";
    v.start();
}

function mouseUpColor(button){
    button.classList.toggle("click");
    v.stop(a.currentTime);
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

function startGame(){

    while (true){
        playCPU();
    }
}