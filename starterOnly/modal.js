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

// ici je vais commencer a recupéré le formulaire, et ses différents input(je pense), afin de les sécurisé et validé un par un

const formulaire = document.querySelector("#myForm");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let mail = document.querySelector("#email");
// let birthDate = document.querySelector("#birthdate");
// let submit = document.querySelector('.btn-submit');
// je fais un console log pour être sur de récupéré la bonne chose.
// console.log(formulaire)
// console.log(firstName)
// console.log(lastName)
// console.log(mail)
// console.log(birthDate)

formulaire.addEventListener('submit', function(e){
    // e.preventDefault me sers a ne pas validé le formulaire, et a ne pas me rafraichir la page.
    e.preventDefault();
    // ici j'instanci une nouvelle regex, qui va me permettre de valider les adresse mails
    let mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    // je fais une premiere condition, qui verifie si l'input et vide et avec la valeur value(pour voir la valeur de linput), et  trim(), qui retire les espace au debut et a la fin.
    // je rajoute aussi value.length < 2 pour verifier si l'user a bien rentré plus de 2 caractere
    if(firstName.value.trim() == "" || firstName.value.length < 2) {
      console.log('Met plus que 2 pour le firstname');
    }
    else if(lastName.value.trim() == "" || lastName.value.length < 2){
      console.log("2 caractere minimum pour le lastname")
    }
    else if(!mailformat.test(mail.value)){
      console.log('ladresse mail est pas bonne')
      // je test la valeur de l'input en appelant la methode test, de l'objet RegExp, qui me permet de tester ma regex 
    }
    
    
  })

  // let testReg = new RegExp(/[a-z]{2}/);
  // function getMethods(o) {
  //   return Object.getOwnPropertyNames(Object.getPrototypeOf(o))
  //     .filter(m => 'function' === typeof o[m])
  //   }
  //   console.log(getMethods(testReg))