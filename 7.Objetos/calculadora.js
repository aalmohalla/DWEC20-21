"use strict";

let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = prompt("Introduce el primer valor");
        this.y = prompt("Introduce el segundo valor");
    },
    sum() {
        return +this.x + +this.y;
    },
    mul() {
        return this.x * this.y;
    }


  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );