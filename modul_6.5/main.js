
let myFetch = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

myFetch.then(function(response){

    console.dir(response);


})