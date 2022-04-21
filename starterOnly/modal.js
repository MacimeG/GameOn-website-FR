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
const btnEnd = document.querySelector('.btn-end');
// ici je vais mettre en place mon ecouteur d'evenement qui vas me permettre au clique, de fermer la modal. Je ferme la modal en recuperant la ligne de code qui permet de l'ouvrir, je remplace block par none, pour qu'il disparaisse.

btnClose.addEventListener("click", function(){
  modalbg.style.display = "none";
})

// ici je vais commencer a recupéré le formulaire, et ses différents input(je pense), afin de les sécurisé et validé un par un

const formulaire = document.querySelector("#myForm");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let mail = document.querySelector("#email");
let birthDate = document.querySelector("#birthdate");
let quantity = document.querySelector('#quantity');
// ici je vais selectionné tous les input de type radio (ceux pour choisir la ville) donc je les selectionne par rapport au nom de l'input. 
let checkbox = document.querySelectorAll('input[name="location"]');



let condition1 = document.querySelector('#checkbox1');
let condition2 = document.querySelector('#checkbox2');
//  ici j'essaye de manipuler et voir un peu comment fonctionne les dates. Pour pouvoir sécurisé encore mieux l'input recevant la date.

   

formulaire.addEventListener('submit', function(e){
    // e.preventDefault me sers a ne pas validé le formulaire, et a ne pas me rafraichir la page.
    e.preventDefault();
    // ici j'instanci une nouvelle regex, qui va me permettre de valider les adresse mails et aussi pour la quantité de tournoi deja fais.
    let mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let quantite = new RegExp(/[0-9]/gm);
    // ici j'instanci des nouvelles date, une qui recupere la date du jours, et l'autre la date rentré par l'user.
    let date1 = new Date()
    let dateSelection = new Date(birthDate.value)
    // ici je crée une variable error, qui vas s'incrementer de 1, si le formulaire n'est pas rempli correctement.
    let error = 0
    // je fais une premiere condition, qui verifie si l'input et vide et avec la valeur value(pour voir la valeur de linput), et  trim(), qui retire les espace au debut et a la fin.
    // je rajoute aussi value.length < 2 pour verifier si l'user a bien rentré plus de 2 caractere
    if(firstName.value.trim() == "" || firstName.value.length < 2) {
      console.log('Met plus que 2 pour le firstname');
      error++
      // ici je rajoute le style quand l'user se trompe, avec parentNode qui me permet de selectionné le noeud correspondant, puis grace a setAttribute, je change la valeur de data-error-visible, pour la passer de false a true. pour que l'on voit le style css associé a ses element. ici sa joue avec le after present dans le css, ainsi que les attribut data-error:(avec ces differente phrase derreur) dans le html
      firstName.parentNode.setAttribute("data-error-visible", true);
    }else{
      console.log("first name ok");
      firstName.parentNode.setAttribute("data-error-visible", false);
    }

    if(lastName.value.trim() == "" || lastName.value.length < 2){
      error++
      console.log("2 caractere minimum pour le lastname")
      lastName.parentNode.setAttribute("data-error-visible", true);
    }else{
      console.log("last name ok");
      lastName.parentNode.setAttribute("data-error-visible", false);
    }
    if(!mailformat.test(mail.value)){
      error++
      mail.parentNode.setAttribute("data-error-visible", true);
      console.log('ladresse mail est pas bonne')
      // je test la valeur de l'input en appelant la methode test, de l'objet RegExp, qui me permet de tester ma regex 
    }else{
      console.log("mail ok");
      mail.parentNode.setAttribute("data-error-visible", false);
    }
    if(!birthDate.value || dateSelection.getFullYear() > date1.getFullYear()){
      //  ici je comparer la date selectionné par l'user, avec la date du jours, et je compare pour etre sur qu'il ne rentre pas une date de naissance du style 2033.
      birthDate.parentNode.setAttribute("data-error-visible", true);
      console.log("mettais votre date de naissance svp");
      error++
    }else{
      console.log("date anniversaire ok");
      birthDate.parentNode.setAttribute("data-error-visible", false);
    }
    if(!quantite.test(quantity.value) || quantity.value == "" || quantity.value < 0 || quantity.value > 100){
      quantity.parentNode.setAttribute("data-error-visible", true);
      console.log('mettez des chiffre svp');
      error++
    }else{
      console.log("chiffre ok");
      quantity.parentNode.setAttribute("data-error-visible", false);
    }
    for(let i = 0; i < checkbox.length; i++){
      if(checkbox[i].checked == false){
        console.log('choisissez une ville svp');
        checkbox[i].parentNode.setAttribute("data-error-visible", true);
        error++

      }else{
        console.log(checkbox[i].value);
        checkbox[i].parentNode.setAttribute("data-error-visible", false);
        break;
        // le break me sert a ce que si ce soit vrai, ( donc si une ville et bien selectionné) on force l'arret a cet condition la, donc le style reviens a la normal
      }
    }
    if(!condition1.checked){
      condition1.parentNode.setAttribute("data-error-visible", true);
      console.log("veuillez svp acceptez les conditions d'utilisation");
      error++
      
    }else{
      console.log("condition coché");
      condition1.parentNode.setAttribute("data-error-visible", false);
    }
    if(condition2.checked == true){
      console.log("cette condition n'est pas obligatoire, mais validation effectué");
    }else{
      console.log("condition pas coché.");
    }
   
    if(error >= 1){
      console.log("formulaire non valide");
    }else{
      console.log("formulaire validé");
      // ici je recupere la div qui va me permettre dafficher le message de fin.
      let end = document.querySelector('.endForm')
      formulaire.style.display="none"
      end.style.display = "block"
      
    }
  })
  // ici je met en place un second ecouteur d'evenement, qui au clic sur le bouton, fermera le formulaire
  btnEnd.addEventListener('click', function(){
    // let end = document.querySelector('.endForm')
    // end.style.display="none"
    modalbg.style.display="none"
  })
  // let testReg = new RegExp(/[a-z]{2}/);
  // function getMethods(o) {
  //   return Object.getOwnPropertyNames(Object.getPrototypeOf(o))
  //     .filter(m => 'function' === typeof o[m])
  //   }
  //   console.log(getMethods(testReg))