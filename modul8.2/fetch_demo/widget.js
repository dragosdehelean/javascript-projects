var xhr = new XMLHttpRequest();
xhr.open('GET', 'employees.json');
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
xhr.send();


// fetch('employees.json')
//     .then(parseJSON)
//     .then(formsList)
//     .then(addEmployeesToPage)
//     .catch(showError);

// function parseJSON(response) {
//     return response.json();
// }

// function formsList(employees) {
//     var statusHTML = '<ul class="bulleted">';
//     for (var i = 0; i < employees.length; i += 1) {
//         if (employees[i].inoffice === true) {
//             statusHTML += '<li class="in">';
//         } else {
//             statusHTML += '<li class="out">';
//         }
//         statusHTML += employees[i].name;
//         statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';

//     return statusHTML;
// }

// function addEmployeesToPage(statusHTML) {
//     document.getElementById('employeeList').innerHTML = statusHTML;
// }

// function showError(error) {
//     console.log("Eorare: " + error);
// }