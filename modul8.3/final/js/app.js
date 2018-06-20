
// RESURSE Dog API:
// imagine random: https://dog.ceo/api/breeds/image/random
// toate rasele: https://dog.ceo/api/breeds/list
// imagine random dintr-o rasa: https://dog.ceo/api/breed/{nume_rasa}/images/random

// Referinte la elementele necesare din HTML
const select = document.getElementById('breeds'); // <select>
const card = document.querySelector('.card'); // <div>
const form = document.querySelector('form'); // <form>

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1: exploreaza in consola un response HTTP de la server
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data.message));

// PAS 2: obtine o imagine random de la API si o afiseaza in <div>
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())    
    .then(data => generateImage(data.message));

// PAS 3: obtine o lista de rase de caini de la API si o afiseaza in <select>
fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())  
  .then(data => generateOptions(data.message));  
  
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// PAS 4: la schimbarea optiunii din <select> afiseaza o imagine din rasa selectata
select.addEventListener('change', function(){
  const breed = this.value;  
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';  
  fetch(url)  
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));  
})

// PAS 5: la click in interiorul <div>-ului afiseaza alta imagine din rasa selectata
card.addEventListener('click', function(){
  const breed = select.value;
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
  fetch(url)
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));     
})

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// Afiseaza o imagine in interiorul <div>-ului cu clasa ".card" 
function generateImage(src, alt = 'Random image') {  
  const html = `
    <img src='${src}' alt='${alt}' title='${alt}'>
    <p>Click to view images of ${select.value}s</p>`;
    
    card.innerHTML = html;
}

// Completeaza optiunile din <select>
function generateOptions(data){
  const options = data.map(item =>
    `<option value='${item}'>${item}</option>`) 
    .join('');
  select.innerHTML = options;
}