//get the form
var form = document.getElementById('ajax-contact');
// Get the messages div.
var formMessages = document.getElementById('form-messages');
// get submit button
var submit = document.getElementById("submit");
// get the list of messages
var messageList = document.getElementById('messages');

showMessages();

// la click pe butonul submit
submit.addEventListener("click", function (event) {

    // opreste comportamentul normal al butonului submit
    event.preventDefault();

    var myFormData = new FormData(form);

    sendData(myFormData);

    //reseteaza form-ul la valorile default
    form.reset();

});

function sendData(myFormData) {

    fetch("http://localhost/modul9_1/index.php", {
            method: "POST",
            mode: 'cors',
            body: myFormData
        })
        .then(response => response.text())
        .then(data => {
        
                formMessages.innerHTML = data;
                showMessages();
            }
        );

}

function showMessages(){

   messageList.innerHTML ='';

    fetch("http://localhost/modul9_1/index.php")
        .then(response => response.json())
        .then(data => {
                console.dir(data);
            
               data.forEach( item => {

               messageList.innerHTML +='<div class="d-flex w-100 justify-content-between"><h5 class="mb-1">' + item.name + '</h5><small>' + item.email + '</small></div>';
               messageList.innerHTML +='<p>' + item.message + '</p>';          

               })

            }
        );

}
