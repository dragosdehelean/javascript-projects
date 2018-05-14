
var add = document.querySelector("#add");
var list = document.querySelector("#lista");

add.addEventListener("click", addItem);

function addItem() {
    
    // creaza un nou element <li> si ii pune continutul din input 
    var el = document.createElement("li");
    el.textContent = document.querySelector("#shop").value + "  ";
    
    // creaza un nou element <button> si il adauga la <li>
    var del = document.createElement("button");
    del.textContent = "Delete";
    el.appendChild(del);

    // pune un event listener care la click va sterge <li>-ul
    el.addEventListener("click", function(){
        this.parentNode.removeChild(this);
    });

    // face append in DOM la noul element <li>
    list.appendChild(el);
}

