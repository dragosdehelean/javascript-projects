
// formeaza o lista cu toate rasele, care sa includa si subrasele
fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => {
    console.log(data);  
    formeazaLista(data.message);
  });

function formeazaLista(arr){
  var newArr = [];
  for(var breed in arr){
    
    if(arr[breed].length === 0){
      newArr.push(breed); 
    } else {
      arr[breed].forEach(item => newArr.push(breed + "-" + item) )
      
      //console.log()
    }
  }
  var str = '[';
  newArr.forEach(item => str += '"' + item + '"' + ',<br>' );
  str +=']';
  document.write(str);


}