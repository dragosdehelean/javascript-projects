// // formeaza o lista cu toate rasele, care sa includa si subrasele
// fetch('https://dog.ceo/api/breeds/list/all')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);  
//     formeazaLista(data.message);
//   });

// function formeazaLista(arr){
//   var newArr = [];
//   for(var breed in arr){
    
//     if(arr[breed].length === 0){
//       newArr.push(breed); 
//     } else {
//       arr[breed].forEach(item => newArr.push(breed + "-" + item) )
      
//       //console.log()
//     }
//   }
//   var str = '[';
//   newArr.forEach(item => str += '"' + item + '"' + ',<br>' );
//   str +=']';
//   document.write(str);

// }


/*
In HTML:
- afisez 10 imagini flexibile
- pun un input de search

- pun un event listener ca sa preiau inputul de la user
- verific daca string-ul se gaseste oriunde in array-ul de breeds si scoate toate rasele gasite
- creez atatea promise-uri cate exista in selectedBreeds si le pun intr-un array dogPromises
- le prind rezolvate toate cu Promise.all si apoi then()
- merge-uiesc toate array-urile de tip values[i].message intr-un finalArr
- selectez x elemente random (atentie ca in array-ul nou format o sa trebuiasca 
    sa verific sa nu am de doua ori aceeasi valoare)

*/

var timeout = null;
var showPlace = document.getElementById('dogs');

//PAS 1: preia inputul de la user cu un event listener
// in event handler apeleaza functia de la Pasul 2 
var search = document.getElementById("search");

search.addEventListener('keyup', function(){
    
    //ne asiguram ca stergem timeout-ul daca el exsita, ca sa nu avem intreruperi
   //  if (timeout !== null){ 
   //      clearTimeout(timeout);
   //  }

    var termen = this.value;
    
   console.log(termen);

    if (termen.length > 1){
      // Make a new timeout set to go off in 500ms
      //   timeout = setTimeout(function () {
      //       getSelectedBreeds(termen);
      //   }, 100);
      getSelectedBreeds(termen);
     
    }
   
});

//PAS 2: creeaza o functie care verifica daca string-ul se gaseste oriunde in array-ul de breeds 
// obtine un array, selectedBreeds, cu rasele gasite
function getSelectedBreeds(termen){
   const selectedBreeds = breeds.filter(item => item.toLowerCase().indexOf(termen.toLowerCase()) !== -1 );
   makeDogPromises(selectedBreeds);
}

//PAS 3: - creeaza o functie care sa preia selectedBreeds (un array cu rasele corespunzatoare stringului de search), 
// - formeaza endpoint-urile pentru interogarea API-ului
// - ruleazea fetch si apoi parseze raspunsul json, pentru fiecare element din selectedBreeds
// - pune toate Promise-urile obtinute astfel intr-un array dogPromises
// - prinde toate Promise-urile rezolvate din array cu Promise.all().then(values => ) 
// - apeleaza o functie concatResultLists(values) care sa concateneze array-urile de url-uri de imagini 
//   (array-uri obtinute cu values[i].message) 
// - cu array-ul complet obtinut, apeleaza o functie care obtine n elemente random din el
// - cu array-ul final apeleaza o functie care sa afiseze in pagina imaginile
function makeDogPromises(selectedBreeds){

    const dogPromises = [];
    selectedBreeds.forEach(element => {
        let promise = fetch('https://dog.ceo/api/breed/' + element + '/images')
                        .then(res => res.json());
        dogPromises.push(promise);        
    });

    Promise.all(dogPromises)
        .then(values => {
            var finalArr = concatResultLists(values);
            finalArr = randomElements(finalArr, 8);
            printImages(finalArr);
        });
        
}

// PAS 4: functia care concateneaza toate array-urile de tip values[i].message
function concatResultLists(values){

   var finalArr = [];

   values.forEach(element => {
      //element.message       
      finalArr = finalArr.concat(element.message);
   });   

   return finalArr;
}

// PAS 5: functia care obtine n elemente random dintr-un array trimis ca parametru
function randomElements(arr1, n){

    var imageArr = []; 
    for(var i=0; i < n; i++){
      let randElem = arr1[Math.floor(Math.random() * arr1.length)];
      if ( randElem !== null && typeof randElem !=='undefined' ){  
         imageArr.push(randElem);
      }
    }

    return imageArr;
}

// PAS 6: functia care printeaza in HTML array-ul cu imaginile finale
// PAS 7 (optional): afisati sub fiecare imagine si rasa din care face parte
// (nota: e nevoie de un Regex putin mai complicat)
function printImages(arr2){   
    var html = '';
    arr2.forEach(item => {
      let reg = /[\w-]+(?=\/n)/g;
      let rasa = item.match(reg); 
      html += '<div class="col-md-3"><img src="' + item +'" class="img-fluid">';
      html += '<br>' + (rasa ? rasa : rasa[0]) +'</div>';      

    });

    showPlace.innerHTML = html;
}