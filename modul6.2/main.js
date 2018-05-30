// Selecteaza elementele html
const add = document.querySelector("#add");
const list = document.querySelector("#lista");
const input = document.querySelector("#shop")


/**
 * Functia care adauga un element in lista de cumparaturi propuse
 */
function addItem() {
    
    // creaza un nou element <li> si ii pune continutul din input 
    var el = document.createElement("li");
    el.textContent = document.querySelector("#shop").value + "  ";
    
    // <button> pentru "edit" 
    var edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.classList.add("mr-2");
   

    // <button> pentru "delete" 
    var del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("mr-2");

     // <button> pentru "submit" 
     var submit = document.createElement("button");
     submit.textContent = "Delete";
     submit.classList.add("mr-2");
    

    // pune un event listener care la click pe "Delete" va sterge <li>-ul
    del.addEventListener("click", function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    // pune un event listener care la click click pe "Submit", ia <li>-ul si il pune in lista finala 
    //  del.addEventListener("click", function(){
    //     this.parentNode.parentNode.removeChild(this.parentNode);
    // });


    el.appendChild(edit);

    el.appendChild(del);

    el.appendChild(submit);

    // face append in DOM la noul element <li>
    list.appendChild(el);
}

// daca se da click pe butonul "Add Item"
add.addEventListener("click", addItem);

// daca se apasa Enter in interiorul input-ului
input.addEventListener("keydown", function(e){    
    if (e.key ==="Enter"){
        addItem();
    }
})