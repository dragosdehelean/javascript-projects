
// fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(data => console.log(data.results));
    
// fetch('https://dragosdehelean.github.io/javascript-projects/modul8.6/user2.json')
//     .then(response => response.json())
//     .then(data => console.log(data[1].name.first));

// fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=3')
//     .then(response => response.text())
//     .then(data => console.log(data));

// fetch('http://thecatapi.com/api/images/get?format=html&results_per_page=20')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById("cats").innerHTML = data.split() ;
//         console.log(data.split(/$/));
// });
    
// function showCat(data){
//     // The DOMParser interface provides the ability to parse XML or HTML source code 
//     // from a string into a DOM Document.
//     var parser = new DOMParser();
//     var doc = parser.parseFromString(data, "application/xml");    
//     var sources = doc.getElementsByTagName("url");
    
//     Array.from(sources).forEach(item => { // ce se intampla aici? :)
//         var img = document.createElement('img');
//         img.src = item.innerHTML;        
//         document.body.appendChild(img);
//     });
// }


fetch('https://api.thedogapi.com/v1/images/?limit=10', {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         "x-api-key": "ee309bb9-46ec-4275-a8b8-44b6064aa3cc"
      },
   })
   .then(response => {
      console.log("Response la GET", response);
      return response.json();
   })
   .then(data => console.log("Datele primite", data));


// fetch('https://api.thedogapi.com/v1/favourites', {
//       method: "POST",
//       headers: {
//          "Content-Type": "application/json",
//          "x-api-key": "ee309bb9-46ec-4275-a8b8-44b6064aa3cc"
//       },
//       body: JSON.stringify({
//          image_id: "r1V_Ye7Cf",
//          sub_id: "my-user-test"
//       })

//    })
//    .then(response => {
//       console.log(response);
//       return response.json();
//    })
//    .then(data => console.log("Datele primite", data));

// fetch('https://api.thedogapi.com/v1/favourites', {
//       method: "GET",
//       headers: {
//          "Content-Type": "application/json",
//          "x-api-key": "ee309bb9-46ec-4275-a8b8-44b6064aa3cc"
//       }
//    })
//    .then(response => {
//       console.log(response);
//       return response.json();
//    })
//    .then(data => console.log("Datele primite la get pe favorite", data));

