"use strict"

function min(a,b){
    if(a<b) return a;
    return b;
}


function pow(x,n){
    let result = x;
    for (let i=1; i<n; i++) {
        result *= x;
    }
    return result;
}

alert(pow);

alert ("Mínimo entre 4 y 7 es:" + min(4,7));

alert ("Potencia 2 elevado a 10: " + pow(2,10));