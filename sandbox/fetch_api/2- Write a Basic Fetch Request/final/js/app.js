/**
 * RESURSE:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 */

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1 - obtinem informatii despre o imagine random si exploram
// functionalitatea de baza a fetch

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => console.log(data.message))

// PAS 2 - obtinem url-ul unei imagini random si o printam

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => generateImage(data.message));

// PAS 3 - obtinem lista de rase si completam lista de optiuni a <select>-ului
// Ce tip de data obtinem prin parsarea raspunsului?

fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())
  .then(data => generateOptions(data.message));


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

/**
 * generateImage
 * Afiseaza o imagine in interiorul div-ului cu clasa .card 
 * 
 * @param {string} src - URL-ul imaginii
 */
function generateImage(data) {
  const html = `
    <img src='${data}' alt>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}
/**
 * generateOptions
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



// ------------------------------------------
//  POST DATA
// ------------------------------------------

