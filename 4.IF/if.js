"use strict";

let userAnswerNumber = prompt("Introduce un número");

if (NaN === +userAnswerNumber && userAnswerNumber!=""){
if ( userAnswerNumber>0) {
    alert(1);
} else {
     if (userAnswerNumber<0) {
         alert(-1);
     } else {
         alert(0);
     }
}
} else {
    alert ("Entrada incorrecta");
}