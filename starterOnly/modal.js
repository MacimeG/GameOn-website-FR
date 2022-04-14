function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// ici je vais recuperer la classe qui vas me servir a fermer la modal

const btnClose = document.querySelector(".close");

// ici je vais mettre en place mon ecouteur d'evenement qui vas me permettre au clique, de fermer la modal. Je ferme la modal en recuperant la ligne de code qui permet de l'ouvrir, je remplace block par none, pour qu'il disparaisse.

btnClose.addEventListener("click", function(){
  modalbg.style.display = "none";
})
