var list = document.getElementById("items-list")

function callItem(){
    $.get("https://immense-plateau-68535.herokuapp.com/list", function(data){
        list.replaceChildren();
        console.log(data);
        for(let i = 0; i<data.data.length; i++){
            var items = document.createElement("div");
            var icon = document.createElement("div");
            icon.classList.add("delete-icon")
            items.innerHTML=data.data[i].value;
            items.classList.add("item");
            list.appendChild(items);
        }
    });
}

function addItem(){
    list.replaceChildren();
    let item = document.getElementById("add-item").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem: item + " - Yuly"},
    function(data){
       console.log(data)
       callItem();
    }); 
}

function deleteItem(id,value){
    $.post("https://immense-plateau-68535.herokuapp.com/remove",{
        todoitemId:id,
        userName:value,
    },function(data){
        alert("¿Estás seguro que quieres eliminar este Item?");
        callItem();    
    });    
}