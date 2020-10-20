"use strict";
/*
//Declaración y valores iniciales de un objeto

let user = {
    name: "Alfonso",
    age: 30
};

//acceso a valores de un objeto

console.log ('Edad de' + user.name + ":" + user.age);
*/

//Ejercicio Hola, objeto

let user ={};
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;


let isEmpty = function (object) {
    for (let key in object){
        return false;
    }
    return true;
};