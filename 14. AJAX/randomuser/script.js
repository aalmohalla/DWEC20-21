"use strict";

//añadimos la transición de animación al boton de recarga
let refreshButton = document.querySelector("i.material-icons.refresh-image");
let avatar = document.querySelector("#avatar");
let imagenContainer = document.querySelector("#imagen");
let loader = document.querySelector(".loader");
let loading = false;
let loadTry = 1;
let user = {}; //estructura de datos de usuario mostrado en la vista, los campos se deben llamar igual a los
// data-set configurados en html

imagenContainer.addEventListener("mouseover",(e)=>{
    if (!loading && (e.target.tagName == "IMG" || e.target.tagName == "I") ) {
    avatar.classList.add("avatar-active");
    refreshButton.classList.add("refreshImage-active");
    }
});

imagenContainer.addEventListener("mouseout",()=>{
    if (!loading){
    avatar.classList.remove("avatar-active");
    refreshButton.classList.remove("refreshImage-active");
    }
    
});

imagen.addEventListener("click",(e)=>{
    if (e.target.tagName == "IMG" || e.target.tagName == "I" ) {
        loading = true;
        refreshButton.classList.remove("refreshImage-active");
        dataRefresh();
    }
});

function dataRefresh(){
   
    loader.hidden = false;
     fetch("https://randomuser.me/api/1.3/")
    .then(response => response.json())
    .then(datos=>{
        loader.hidden = true;
        loading = false;
        loadTry = 1;
        dataUpdate(datos);
    })
    .catch(() => {
        //3 reintentos de carga, para cada uno incrementamos el tiempo de espera en el reintento
        if(loadTry < 4){
        setTimeout(dataRefresh,loadTry*1000)
        } else{
            alert("error de carga");
        }
    })
    .finally(()=>{
    avatar.classList.remove("avatar-active");
    refreshButton.classList.remove("refreshImage-active");
    });
}

// refresca los datos del objeto user con los del usuario aleatorio cargado. Actualiza la imagen
function dataUpdate(datos){
    console.dir(datos);
    let data = datos.results[0];
    avatar.src = data.picture.large;
    user["name"] = data.name.first + " " + data.name.last;
    user["mail"] = data.email;
    user["phone"] = data.phone;
    user["address"] = data.location.street.name + " " + data.location.street.number + " " + data.location.city;
    user["birthday"] = new Date(data.dob.date).toDateString();
    user["password"] = data.login.password;
    document.getElementById("fullname").textContent = "Hola, mi nombre es " + user.name;
    console.dir(user);
}

document.querySelector(".footer").addEventListener("mouseover", (event)=>{
    let target = event.target;
    //si se pone el raton sobre un icono no activo, se desactivan todo y se activa el
    if (target.tagName == "I" && !target.classList.contains("active")){
        document.querySelector(".footer").querySelectorAll("i").forEach((icon)=>icon.classList.remove("active"));
        target.classList.add("active");
        document.getElementById("fullname").textContent = user[target.dataset.fieldName];
    }
});