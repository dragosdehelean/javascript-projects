/**
 * RESURSE Dog API:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/{nume_rasa}/images/random
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


// PAS 2 -  afisam imaginea random obtinuta de la API in <div>-ul cu clasa “.card”



// PAS 3 - obtinem la API o lista de rasele de caini (endpoint-ul 2 de la resurse). 
//  Completam cu ea lista de optiuni a selectului
//  Ce tip de data obtinem prin parsarea raspunsului?



// PAS 4 - In functie de rasa selectata in pagina HTML, facem sa se afiseze o imagine random
//  cu un caine din acea rasa in <div>-ul ".card"


// PAS 5 - Facem astfel incat la click in interiorul <div>-ului cu clasa ".card" sa se afiseze o
//  alta imagine random a unui caine din rasa selectata

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------