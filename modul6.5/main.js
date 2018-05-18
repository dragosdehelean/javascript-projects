// obtinem referinte la elementele HTML de care avem nevoie  
const word = document.querySelector("#word");
const button = document.querySelector("button");
const select = document.querySelector("#s1");

/* punctul 1) Apelarea unei functii custom */
word.addEventListener("focus", changeBackround);

function changeBackround(){
    this.style.backgroundColor = "yellow";
}

/* punctul 2) Apelarea unei functii anonime */
word.addEventListener("focusout", function(){
    this.value = this.value.toUpperCase();
})

/* punctul 3) Transmiterea unor parametrii catre event handler */
button.addEventListener("click", function(){
    let color = word.value;
    changeColor(color, this);
});

function changeColor(color, element){
    element.style.color = color;
}

/* punctul 4) Apelarea unei Closure intoarsa de o Function Factory / Emularea unei variabile statice */
button.addEventListener("click", makeNumber(word));
function makeNumber(element){
  let i = 0;
  return function(){
    element.value += i;
    i++;   
  }
}

/* punctul 5) One more time! */
select.addEventListener("change", function () { 
    let color = this.options[this.selectedIndex].value;
    button.style.color = color; 
})
