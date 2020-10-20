"use strict";
/*
let calculator = {
    a:0,
    b:0,
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt("Introduce el primer valor");
        this.b = +prompt("Introduce el segundo valor");

    }
   

  };
  */

  function Calculator() {
  // this = {}
    this.a = 0;
    this.b = 0;
    //a:0,
    //b:0,

    this.sum = function(){
        return this.a + this.b;
    };
    
    this.mul = function(){
        return this.a * this.b;
    };

    this.read = function(){
        this.a = +prompt("Introduce el primer valor");
        this.b = +prompt("Introduce el segundo valor");

    };
// return this
}

  let calculator = new Calculator();
  let calculator2 = new Calculator();
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );