var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//MENU DESPLEGABLE

const hamburguesa = document.querySelector(".menu-movil");
const menuDesplegable = document.querySelector(".menu-desplegable");
const links = document.querySelectorAll(".links-desplegable");
const botonCerrar = document.querySelector(".contenedor-btn-cerrar");
const botonBuscarDesplegable = document.querySelector(".btn-desplegable");
const inputDesplegable = document.querySelector(".input-buscar-desplegable");

const cruzUno = document.querySelector(".cruz-uno");
const cruzDos = document.querySelector(".cruz-dos");

const cruces = document.querySelectorAll(".cruz");

hamburguesa.addEventListener("click", mostrarDesplegable);

function mostrarDesplegable() {
  menuDesplegable.style.left = "0";
  if ((cruces.item(0).style.transform = "rotate(0)")) {
    cruces.item(0).style.transform = "rotate(135deg)";
    cruces.item(1).style.transform = "rotate(-135deg)";
    //PARA RESETEAR LOS VALORES POR SI EL MENU SE ABRE MAS DE UNA VEZ
  }
}

botonCerrar.addEventListener("click", cerrarDesplegable);

function cerrarDesplegable() {
  menuDesplegable.style.left = "-100%";
  cruces.forEach((cruz) => {
    cruz.style.transform = "rotate(0)";
  });
}

links.forEach((link) => {
  link.addEventListener("click", cerrarDesplegable);
});

botonBuscarDesplegable.addEventListener("click", borrarContenido);

function borrarContenido() {
  inputDesplegable.value = "";
}
