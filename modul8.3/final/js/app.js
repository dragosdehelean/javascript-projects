/**
 * RESURSE Dog API:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/{hound}/images/random
 */

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1 - obtinem informatii despre o imagine random si 
// Exploram in consola functionalitatea de baza a metodei fetch(), 
//  cum gestionam un Response cu metoda .then(), 
//  parsarea unui string JSON cu metoda Response.json() etc.  

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data.message));


// PAS 2 -  afisam imaginea random obtinuta de la API in <div>-ul cu clasa “.card”

fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
       return response.json();
    })
    .then(function(data){ 
        generateImage(data.message)
    });


// PAS 3 - obtinem la API o lista de rasele de caini (endpoint-ul 2 de la resurse). 
//  Completam cu ea lista de optiuni a selectului
//  Ce tip de data obtinem prin parsarea raspunsului?

fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())
  .then(data => generateOptions(data.message));

// PAS 4 - In functie de rasa selectata in pagina HTML, facem sa se afiseze o imagine random
//  cu un caine din acea rasa in <div>-ul ".card"


// PAS 5 - Facem astfel incat la click in interiorul <div>-ului cu clasa ".card" sa se afiseze o
//  alta imagine random a unui caine din rasa selectata


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

/**
 * Afiseaza o imagine in interiorul div-ului cu clasa .card 
 * 
 * @param {string} src - URL-ul imaginii
 */
function generateImage(data, alt = 'Random image') {
  
  const html = `
    <img src='${data}' alt='${alt}' title='${alt}'>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

/**
 * Completeaza optiunile din <select> cu rasele obtinute de la API
 * 
 * @param {Array} data - lista de rase
 */
function generateOptions(data) {

  const options = data.map(item => `
    <option value='${item}'>${item}</option>
    `).join('');
    
  select.innerHTML = options;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// 4.1 seteaza un event listner pentru schimbarea optiunii din <select>
select.addEventListener('change', function(){
  const breed = this.value;
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
  fetch(url)
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));  
})

// 4.3 seteaza un event listner pentru click in interiorul div-ului cu clasa .card
card.addEventListener('click', function(){
  const breed = select.value;
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
  fetch(url)
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));  
})

// ------------------------------------------
//  POST DATA
// ------------------------------------------


