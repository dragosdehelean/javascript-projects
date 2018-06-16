const word = document.querySelector("#word");
const button = document.querySelector("button");

word.addEventListener("focus", changeBackround);

function changeBackround(){

    this.style.backgroundColor = "yellow"

}

word.addEventListener("focusout", function(){

    this.value = this.value.toUpperCase();

})

button.addEventListener("click", function(){

    let color = word.value;

    changeColor(color, this);

})

function changeColor(color, element){

    element.style.color = color;

}

button.addEventListener("click", makeNumber(word));

function makeNumber(element){

    let i = 0;

    return function(){
        
        element.value += i;
        i++; 

    }

}

document.querySelector("#s1").addEventListener("change", function () { 
    let color = this.options[this.selectedIndex].value;
    button.style.color = color;	
})



