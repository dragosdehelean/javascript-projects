
let index = 0;

const forward = document.getElementById("inainte");
const img = document.querySelector("#slide");
const meniu = document.querySelector("#meniu");

const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];

function showImage(currIndex){
    // verifica daca se depaseste marginea / daca da merge in cerc
    if (currIndex === images.length){
        currIndex = 0;
    } else if(currIndex === -1){
        currIndex = images.length-1;
    }    

    //afiseaza imaginea dorita
    img.src = 'img/' + images[currIndex].src;
    img.alt = images[currIndex].alt;
    img.title = images[currIndex].alt;

    // if(currIndex === images.length - 1){
    //     //forward.hidden = true; 
    // } else {        
    //     //forward.hidden = false;
    // }
    
    //actualizeaza variabila globala cu valoarea locala
    index = currIndex;
}

function meniuBilute(currIndex){
    //reseteaza meniu existent anterior
    meniu.innerHTML = '';
    for (let i=0; i< images.length; i++){
        //creeaza nodul virtual cu atribute si event listener
        biluta = document.createElement("span");
        biluta.id = "biluta" + (i+1);
        biluta.classList.add('biluta');
        if (i === currIndex){
            biluta.classList.add('activ');
        }
        // biluta.addEventListener( "click", makeBilutaCallback(i) );
        biluta.addEventListener( "click", function(){
            showImage(i);
            meniuBilute(i);    
        });

        meniu.appendChild(biluta); 
    }

    index = currIndex;
}

// factory function care intoarce o functie anonima pe post de event handler
function makeBilutaCallback(index){
    return function(){
        showImage(index);
        meniuBilute(index);
    }
}

window.addEventListener("load", function(){ 
    showImage(index);
    meniuBilute(index);
});

document.getElementById("inainte").addEventListener("click", function(){ 
    showImage(++index); 
    meniuBilute(index);
});

document.getElementById("inapoi").addEventListener("click", function(){ 
    showImage(--index); 
    meniuBilute(index);
});
