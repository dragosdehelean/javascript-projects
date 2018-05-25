// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];

// obtine referintele la tag-urile HTML existente 
// (tag-ul img si div-ul in care vom crea meniul de bilute)
const img = document.querySelector("#slide");
const meniu = document.querySelector("#meniu");

// variabila globala pe care o vom folosi pt a obtine in fiecare moment
// indexul imaginii pe care vrem s-o afisam
let index = 0;

// functie care afiseaza imaginea curenta
function showImage(localIndex){
    
    // verifica daca se depaseste marginea / daca da merge in cerc
    if (localIndex === images.length){
        localIndex = 0;
    } else if( localIndex === -1 ){
        localIndex = images.length-1;
    }    

    //afiseaza imaginea dorita. Ii completeaza atributele cu valori
    img.src = 'img/' + images[localIndex].src;
    img.alt = images[localIndex].alt;
    img.title = images[localIndex].alt;
    
    //actualizeaza variabila globala cu valoarea locala
    index = localIndex;
}

function meniuBilute(localIndex){
    //reseteaza meniu existent anterior
    meniu.innerHTML = '';
    for (let i=0; i< images.length; i++){
        //creeaza nodul virtual cu atribute si event listener
        biluta = document.createElement("span");
        biluta.id = "biluta" + (i+1);
        biluta.classList.add('biluta');
        if (i === localIndex){
            biluta.classList.add('activ');
        }
        // biluta.addEventListener( "click", makeBilutaCallback(i) );
        biluta.addEventListener( "click", function(){
            showImage(i);
            meniuBilute(i);    
        });

        meniu.appendChild(biluta); 
    }

    index = localIndex;
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

//obtine o referinta la butonul "inainte" si ii ataseaza un event handler
document.getElementById("inainte").addEventListener("click", function(){ 
    showImage(++index); 
    meniuBilute(index);
});

//obtine o referinta la butonul "inapoi" si ii ataseaza un event handler
document.getElementById("inapoi").addEventListener("click", function(){ 
    showImage(--index); 
    meniuBilute(index);
});