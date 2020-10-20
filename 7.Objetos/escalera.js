"use strict";

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;  
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // muestra el peldaño actual
      alert( this.step );
    }
  };

  ladder.up().up().down().showStep(); // 1