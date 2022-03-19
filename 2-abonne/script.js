console.log('connecté!');

const icone = document.querySelector('i');
console.log(icone);

icone.addEventListener('click', function(){
    console.log("icone cliqué !");
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});

const btn = document.querySelector('.btn');
console.log(btn);

btn.addEventListener('click', function(){
    console.log("bouton cliqué !");
    btn.classList.toggle('abonne');

    if(btn.innerText === 'Abonné'){
        btn.innerText = "Abonner-vous";
    }else{
        console.log('else');
        btn.innerText = "Abonné";
    }
    
});