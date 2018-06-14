
document.querySelector("#load").addEventListener("click", loadData);

document.querySelector("#reload").addEventListener("click", function(){
    window.location.reload();
});

function loadData(){

    // Adresa la care vom trimite un request HTTP 
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'; 

    // Procedura de trimitere a unui request HTTP prin XMLHttpRequest 
    var request = new XMLHttpRequest(); //instantiaza un obiect pe constructorul API-ului
    request.open('GET', requestURL); // request-ul va fi de tip 'GET'
    request.responseType = 'json'; // raspunsul va fi un obiect JS obtinut dintr-un JSON 
    request.send(); // trimite request-ul 

    // Atasam un event handler care va fi executat in momentul primirii unui raspuns
    request.onload = function () {
        var superHeroes = request.response; // obiectul JS primit ca raspuns
        populateHeader(superHeroes); // prima functie care scrie in DOM
        showHeroes(superHeroes); // a doua functie care scrie in DOM
    }

    request.addEventListener

}

// Functia care scrie in tag-ul <header>
function populateHeader(jsonObj) {
  var header = document.querySelector('header'); // obtine o referinta la <header>
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);
  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

// Functia care scrie in tag-ul <section> 
// (Vom avea un tag <article> pentru fiecare hero)
function showHeroes(jsonObj) {
  var section = document.querySelector('section'); // obtine o referinta la <section>
  var heroes = jsonObj['members']; // un array de obiecte 
  
  // bucla principala. Trece prin fiecare obiect din array-ul 'heroes'
  for (i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article'); 
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    //obtine array-ul 'powers' corespunzator obiectului curent
    var superPowers = heroes[i].powers;
    for (j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
    }
    
    //executa operatiile finale asupra DOM-ului
    myArticle.appendChild(myH2);    
    myArticle.appendChild(myPara1);    
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);      
  }
}