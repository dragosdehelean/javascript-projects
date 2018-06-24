
var test = "test1";

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => console.log(data.results))
    
    //.then(data => console.log(data.results[0].name.first))