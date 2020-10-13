"use strict"

/*

let userLimitNumber = prompt("Introduce un valor mayor que 1");

while( userLimitNumber <2 || isNaN(userLimitNumber)){
userLimitNumber = prompt("Entrada erronea. Introduce un valor mayor que 1");
}

let resultPrimos ="";

noprimo: for (let i=2; i<=userLimitNumber; i++){
    for(let j= 2; j<i; j++){
        if (i%j ==0) continue noprimo;
     }

     if (resultPrimos == "" ) {
         resultPrimos = i;
    } else {
        resultPrimos = resultPrimos + ", " +i;
    }
}

console.log(resultPrimos);

*/


let userLimitNumber = prompt("Introduce un valor mayor que 1");

function isPrime(number) {
    for (let i=2; i<number; i++){
        if(number%i == 0) return false;
    }
    return true;
}

while( userLimitNumber <2 || isNaN(userLimitNumber)){
userLimitNumber = prompt("Entrada erronea. Introduce un valor mayor que 1");
}

let resultPrimos ="";


for (let i=2; i<=userLimitNumber; i++){
    if(isPrime(i)){
         if (resultPrimos == "" ) {
             resultPrimos = i;
         }else {
            resultPrimos = resultPrimos + ", " +i;
        }
    }
}

console.log(resultPrimos);

