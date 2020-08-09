list=document.getElementById("list")
function addtodo(){
   var todo_item=document.getElementById("todo_item")
   var li=document.createElement("li")
   var textnode=document.createTextNode(todo_item.value)
   li.appendChild(textnode)
   var delbtn=document.createElement("button")
   var delbtntext=document.createTextNode("Delete")
   delbtn.setAttribute("onclick","deleteitm(this)")
   delbtn.appendChild(delbtntext)
   
   var editbtn=document.createElement("button")
   var edittext=document.createTextNode("Edit")
   editbtn.appendChild(edittext)
   editbtn.setAttribute("onclick","edititem(this)")
   
   li.appendChild(editbtn)
   


   li.appendChild(delbtn)
   
   list.appendChild(li)
   todo_item.value=""
   console.log(li)
}
function deleteitm(e){
   
   e.parentNode.remove()
}
function edititem(e){
   var val=e.parentNode.firstChild.nodeValue
   var editValue=prompt("Enter Edit Value",val)
   e.parentNode.firstChild.nodeValue=editValue
}
function deleteAll(){
   list.innerHTML=""
}