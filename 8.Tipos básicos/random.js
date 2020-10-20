"use strict";

//maximo no incluido
function random (min,max){
    //let aleatorio = Math.random();
    let aleatorio = 1;
    return aleatorio * (max - min) + min;
}

alert(random(1,10));
alert(random(6,10));
alert(random(30,35));