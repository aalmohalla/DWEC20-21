//"use strict"

// TIPO DE DATOS STRING

let text = "Hola mundo¡";

console.log(text);

// Para evaluar una expresión utilizamos backticks y ${}

console.log(`El texto de la variable text es ${text}`);



//TIPO DE DATOS NUMBER

let number = 5;
console.log(`El tipo de datos de ${number} es ${typeof(number)}`);

// Existen los valores +Infinity y -Infinity
console.log(`El resultado de 1/0 es ${1/0}`);

// Una operación matemática no permitida devolvera el valor NaN: Not a Number
console.log(` El resultado de 1/dos es ${1/"dos"}`);

//NaN se propaga en una operación matemática

console.log(`El esultado de 2+2+NaN es ${2+2+NaN}`);

// El límite de Number es 2e53

console.log(`${9007199254740991 + 100}`)


// TIPOS DE DATOS BOOLEANOS

let isGreater = 4 > 1;

console.log("¿4>1?: " + isGreater);

let booleanZero = 0;

console.log ("Valor de 0:" + Boolean(booleanZero));


