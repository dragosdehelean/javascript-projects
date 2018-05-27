var cards = document.querySelectorAll('.meeting');
var a1 = Array.from(cards).sort( function(a,b){
    a = new Date(a.attributes[2].nodeValue).valueOf() 
    b = new Date(b.attributes[2].nodeValue).valueOf()

    return a - b;

});

a1.forEach(el => {
    document.querySelector('.right3').appendChild(el);
});