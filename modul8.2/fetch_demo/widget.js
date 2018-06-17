/**
 * Procedura clasica pentru a trimite un Request prin XMLHttpRequest * 
 */

// creeaza un obiect nou XMLHttpRequest
var xhr = new XMLHttpRequest(); 
// pregateste Request-ul
xhr.open('GET', 'employees.json'); 
// gestioneaza schimbarile de stare prin care va trece Request-ul 
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
// trimite Request-ul 
xhr.send();

/**
 * Versiunea moderna de a trimite un Request folosind API-ul Fetch
 * Metoda globala fetch() primeste un singur argument obligatoriu: calea catre resursa pe care vrem s-o obtinem 
 * Intoarce o Promise, care contine raspunsul HTTP (un obiect de tip Response)   
 * Raspunsul este procesat cu metoda .then() care intoarce la randul sau o Promise
 * Metoda .json() parseaza corpul JSON al raspunsului
 */

// fetch('employees.json')
//     .then(response => response.json())
//     .then(formsList)
//     .then(addEmployeesToPage)
//     .catch(showError);

// function formsList(employees) {
//     var outputHTML = '<ul class="bulleted">';
//     for (var i = 0; i < employees.length; i += 1) {
//         if (employees[i].inoffice === true) {
//             outputHTML += '<li class="in">';
//         } else {
//             outputHTML += '<li class="out">';
//         }
//         outputHTML += employees[i].name;
//         outputHTML += '</li>';
//     }
//     outputHTML += '</ul>';

//     return outputHTML;
// }

// function addEmployeesToPage(outputHTML) {
//     document.getElementById('employeeList').innerHTML = outputHTML;
// }

// function showError(error) {
//     console.log("Eorare: " + error);
// }