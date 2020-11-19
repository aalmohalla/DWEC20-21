

 let pcList = [];//array con el inventario de objetos PC

  
//1. FUNCIÓN newPC: debe solicitar por pantalla los datos del PC, crear un objeto con dichos datos, y
// almacenarlo en el array pcList. el objeto tendrá las propiedades name, memory, disk, os. Todas serán string
// menos os que sera boolean, false para Linux y true para Microsoft. El objeto se agregara al array pcList.

function newPC(){
   //TU CÓDIGO AQUÍ
    let pc = {};
    pc.name = prompt("Introduce el nombre");
    pc.memory = prompt("Introduce la memoria");
    pc.disk = prompt("Tamaño de disco");
    pc.os = confirm("El sistema operativo es Windows? ");

    pcList.push(pc);

    listClear();
    printPC(document.querySelector("#usersList"));
}

// Ordena los equipos por nombre, alfabeticamente de "a" a "z"
function nameOrder(){
  //TU CÓDIGO AQUÍ
    
    pcList.sort((a,b)=> {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      };
    });
    listClear();
    printPC(document.querySelector("#usersList"));    
}

// Ordena los equipos por RAM, de mayor a menor
function ramOrder() {
  //TU CÓDIGO AQUÍ
  pcList.sort((a,b)=> a.memory - b.memory);

  listClear();
  printPC(document.querySelector("#usersList")); 
}

// Pide al usuario los GB de RAM con los que se van a ampliar todos los equipos inventariados y lo actualiza
function ramUpdate(){

  //TU CÓDIGO AQUÍ
let ramUpdateInput = prompt ("Introduzca la actualización de ram para todos los equipos");
pcList=pcList.map(pc=>{
  pc.memory = (+pc.memory + +ramUpdateInput).toString();
  return pc;
});


    listClear();
    printPC(document.querySelector("#usersList"));    
}


//muestra un alert con los datos del equipo con mayor cantidad de RAM. En caso de haber varios equipos con la misma cantidad de RAM, muestra el primero por orden alfabético del nombre de equipo
function maxRAM() {
  //TU CÓDIGO AQUÍ
 
  let pcsortname = pcList.sort((a,b)=> {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    };
  });
  //pcsortname.
}

// muestra un alert con la memoria RAM total de todos los equipos inventariados.
function totalRAM(){

  //TU CÓDIGO AQUÍ



}


// FUNCIONES PARA LA VISTA, NO MODIFICAR NADA A PARTIR DE ESTE PUNTO

//inicialización de las ventanas modales materialize CSS
let modalWindow = M.Modal.init(document.querySelectorAll('.modal'),{dismissible: false})[0];

//Evento de carga de usuarios  
document.querySelector("#newPC").addEventListener("click",newPC);
document.querySelector("#nameSort").addEventListener("click",nameOrder);
document.querySelector("#ramSort").addEventListener("click",ramOrder);
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
