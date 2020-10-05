"use strict";
/*
let userAnswerNumber = prompt("Introduce un número");

if (NaN === +userAnswerNumber && userAnswerNumber!=""){
if ( userAnswerNumber>0) {
    alert(1);
} else if (userAnswerNumber<0) {
         alert(-1);
     } else {
         alert(0);
     }

} else {
    alert ("Entrada incorrecta");
}
*/

/*EJERCICIO2
let userAnswerAge = prompt("Introduce tu edad");

if ( userAnswerAge >= 14 && userAnswerAge <= 90 ){
    alert("Tu edad esta entre 14 y 90 años");
} else {
    alert("Tu edad NO esta entre 14 y 90 años");
}

*/


/*let userAnswerAge = prompt("Introduce tu edad");

if ( !(userAnswerAge >= 14 && userAnswerAge <= 90) ){
    alert("Tu edad NO esta entre 14 y 90 años");
} else {
    alert("Tu edad esta entre 14 y 90 años");
}

if ( userAnswerAge < 14 || userAnswerAge > 90 ){
    alert("Tu edad NO esta entre 14 y 90 años");
} else {
    alert("Tu edad esta entre 14 y 90 años");
}
*/

let userLogin = prompt("Introduce tu login");

if (userLogin == "Admin") {

    let userPasswd = prompt("Introduce tu contraseña");
    if (userPasswd == "TheMaster") {
        alert("Bienvenido");
    } else if ( userPasswd == "" || userPasswd == null){
        alert("Cancelado");
        } else {
            alert ("Contraseña incorrecta");
        }   

}else if(userLogin == "" || userLogin == null) {
    alert("Cancelado");
    } else {
    alert("No te conozco");
    }