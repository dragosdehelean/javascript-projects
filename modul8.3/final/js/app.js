// Endpoint-uri Dog API:
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

// PAS 2: obtine o imagine random (https://dog.ceo/api/breeds/image/random) 
// Apeleaza functia generateImage(), care afiseaza raspunsul in <div>  
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => generateImage(data.message));

// PAS 3: obtine o lista de rase de caini (https://dog.ceo/api/breeds/list)
// Apeleaza functia generateOptions(), care afiseaza raspunsul in <select> 
fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())
  .then(data => generateOptions(data.message));


// PAS 8 - integreaza primele doua comenzi .fetch() intr-o singura comanda Promise.all()
// Promise.all([
//   fetchData('https://dog.ceo/api/breeds/list'),
//   fetchData('https://dog.ceo/api/breeds/image/random')  
// ])
// .then(data => {
//   const breedList = data[0].message;
//   const randomImage = data[1].message;

//   generateOptions(breedList);
//   generateImage(randomImage);
// })

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// PAS 4: la schimbarea optiunii din <select> afiseaza o imagine din rasa selectata
select.addEventListener('change', function () {
  const breed = this.value;
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
  fetch(url)
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));
})

// PAS 5: la click in interiorul <div>-ului afiseaza alta imagine din rasa selectata
card.addEventListener('click', function () {
  const breed = select.value;
  const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
  fetch(url)
    .then(response => response.json())
    .then(data => generateImage(data.message, breed));
})


// PAS 9 - Transmiteti datele completate in formular printr-un request POST, catre https://jsonplaceholder.typicode.com/posts
// Printati in consola raspunsul primit de la server, impreuna cu un mesaj custom.  
document.getElementById('submit').addEventListener('click', postData);


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// generateImage(src, alt)
// Functie custom, care afiseaza o imagine in interiorul <div>-ului  
function generateImage(src, alt = 'Random image') {
  const html = `
    <img src='${src}' alt='${alt}' title='${alt}'>
    <p>Click to view images of ${select.value}s</p>`;

  card.innerHTML = html;
}

// generateOptions(data)
// Functie custom, care completeaza optiunile din <select>
function generateOptions(data) {
  const options = data.map(item =>
      `<option value='${item}'>${item}</option>`)
    .join('');
  select.innerHTML = options;
}


function postData(event) {
  event.preventDefault();

  let tittle = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({
        tittle: tittle,
        body: body
      })
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("Gata, am postat! Acum e randul serverului sa faca ce stie el cu datele trimise...");
    })
    .catch((err) => console.log(err))
}