console.log('connecté!');

// je selectionneet je stocke
// la div switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);

// la div btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);

//l'icone
const icone = document.querySelector('i');
console.log(icone);

// la div container
const container = document.querySelector('.container');
console.log(container);

//le titre
const titre = document.querySelector('h1');
console.log(titre);

//je soumet la DIV switch a une action au clic
switchBox.addEventListener('click', function(){
    console.log('div cliqué');
    btn.classList.toggle('btn-change');
icone.classList.toggle('icone-change');
icone.classList.toggle('fa-sun');
switchBox.classList.toggle('switch-change')
container.classList.toggle('container-change')
if (titre.innerText === "DARK MODE"){
    titre.innerText = "LIGHT MODE";
}else{
    titre.innerText = "DARK MODE";
}
});