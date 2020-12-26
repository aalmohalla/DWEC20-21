"use strict";
let inputFile = document.querySelector("input");
inputFile.addEventListener("change", readFile);

function readFile(event) {
  let input = event.target;
  console.dir(input);
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsDataURL(file);
  
  reader.onload = function() {
    console.log(this.result);
    let carrusel = document.querySelector(".images");
    carrusel.insertAdjacentHTML("beforeend", `<li><img src=${this.result} class="slide"></li>`);
    
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}