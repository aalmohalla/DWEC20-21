

 let pcList = [];//array con el inventario de objetos PC

//inicialización de las ventanas modales materialize CSS
let modalWindow = M.Modal.init(document.querySelectorAll('.modal'),{dismissible: false})[0];
  
//1. FUNCIÓN newPC: debe solicitar por pantalla los datos del PC, crear un objeto con dichos datos, y
// almacenarlo en el array pcList. el objeto tndrá las propiedades name, memory, disk, os. Todas serán string
// menos os que sera boolean, false para Linux y true para Microsoft. El objeto se agregara al array pcList.

function newPC(){
   //TU CÓDIGO AQUÍ

    listClear();
    printPC(document.querySelector("#usersList"));
}

// Ordena los equipos por nombre, alfabeticamente de "a" a "z"
function nameOrder(){
  //TU CÓDIGO AQUÍ

    
    listClear();
    printPC(document.querySelector("#usersList"));    
}

// Ordena los equipos por RAM, de mayor a menor
function ramOrder() {
  //TU CÓDIGO AQUÍ

}

// Pide al usuario los GB de RAM con los que se van a ampliar todos los equipos inventariados
function ramUpdate(){

  //TU CÓDIGO AQUÍ



    listClear();
    printPC(document.querySelector("#usersList"));    
}


//muestra un alert con los datos del equipo con mayor cantidad de RAM. En caso de haber varios equipos con la misma cantidad de RAM, muestra el primero por orden alfabético del nombre de equipo
function maxRAM() {
  //TU CÓDIGO AQUÍ

}

// muestra un alert con la memoria RAM total de todos los equipos inventariados.
function totalRAM(){

  //TU CÓDIGO AQUÍ



}


//Evento de carga de usuarios  
document.querySelector("#newPC").addEventListener("click",newPC);
document.querySelector("#nameOrder").addEventListener("click",nameOrder);
document.querySelector("#ramOrder").addEventListener("click",ramOrder);
document.querySelector("#ramUpdate").addEventListener("click",ramUpdate);
document.querySelector("#maxRAM").addEventListener("click",maxRAM);
document.querySelector("#totalRAM").addEventListener("click",totalRAM);






//Imprime los pcs en el elemento listBox
function printPC(listBox) {
    let ficha;
  
    for (let pc of pcList) {
        ficha=document.createElement("div"); //creamos la caja de la ficha reducida
        ficha.classList.add("user-profile"); //le añadimos el estilo
                 
        //información HTML en ficha reducida
        ficha.innerHTML=`<p id="fullname">${pc.name}</p><ul><li> Memoria RAM: ${pc.memory}GB</li><li> Disco duro: ${pc.disk}GB</li><li> Sistema operativo: ${pc.os?"Windows":"Linux"}</li>`;
        "</ul>";
        //agragamos la ficha al DOM
        listBox.append(ficha);
       
	}
}

function listClear() {
    let listado = document.querySelector("#usersList").querySelectorAll("div");
    for (let user of listado) {
        user.remove();
    }
}
