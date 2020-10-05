"use strict";

let userLimitNumber = prompt("Introduce un valor entre 2 y 100");

while( userLimitNumber <3 || userLimitNumber > 99 || isNaN(userLimitNumber)){
userLimitNumber = prompt("Entrada erronea. Introduce un valor entre 2 y 100");
}

for (let i=4; i<=userLimitNumber ; i++){

    if (i % 2 == 0) console.log(i);
}
