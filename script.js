var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var delitems=document.getElementsByClassName("delete");

for(var i=0;i<delitems.length;i++)
{
    delitems[i].addEventListener("click",function(event){
        event.target.parentNode.remove();
    });
}

ul.addEventListener("click",function(event){
    var target=event.target;
    target.classList.toggle("done");
})


function inputLength(){
    return input.value.length;
}
function createListElement(){
    var button=document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    button.addEventListener("click",function(event){
        event.target.parentNode.remove();
    });
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button);
    ul.appendChild(li);
    input.value="";
}
function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}
function addListAfterKeyPress(event){
    if(inputLength()>0 && event.keyCode===13){
        createListElement(); 
    }
}
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);