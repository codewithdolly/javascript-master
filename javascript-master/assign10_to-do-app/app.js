var list =document.getElementById("list")

function addtodo(){
    var todo_item= document.getElementById("todo-item")

    //create li tag with text node
    var li= document.createElement('li')
    var trText= document.createTextNode(todo_item.value)
    li.appendChild(trText)
    
     //create delete button 
     var delbtn=document.createElement("button")
     var delText= document.createTextNode("DELETE")
     delbtn.setAttribute("class","delbtn")
     delbtn.setAttribute("onclick","deleteItem(this)")
     delbtn.appendChild(delText)
    li.appendChild(delbtn)

      //create edit button 
      var editbtn=document.createElement("button")
      var editText= document.createTextNode("EDIT")
      editbtn.setAttribute("class","editbtn")
      editbtn.setAttribute("onclick","editItem(this)")
      editbtn.appendChild(editText)
      li.appendChild(editbtn)



    list.appendChild(li)
    todo_item.value=""
}

function deleteItem(del){
del.parentNode.remove()
}


function deleteALL(){
    list.innerHTML=""
}

function editItem(edit){
    var val=prompt("edit your text",edit.parentNode.firstChild.nodeValue)
    edit.parentNode.firstChild.nodeValue=val
}
