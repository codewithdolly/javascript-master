// READ DATA
var ref = firebase.database().ref('mess');

ref.on("child_added", function(snapshot) {
    var area=document.getElementById('areat');
    var dd=document.createElement("div");
    var head=document.createElement('h6');
    var btnd=document.createElement("button");
    btnd.setAttribute("class","btn btn-danger deleteBtn");

    var btt=document.createTextNode("Delete");
    btnd.setAttribute("onclick","deleteitem(this)");
    btnd.setAttribute("id",snapshot.val().key);
    btnd.appendChild(btt);
    
    var ct=snapshot.val().chattext;
    var jj=document.createElement('p');
    jj.setAttribute("class","para");

    area.appendChild(jj);
  // us.className="bb";
    var text=document.createTextNode(ct);
    head.appendChild(text);
    head.className="edit";
    dd.appendChild(head);
    dd.appendChild(btnd);

    dd.className="wwa";
    area.appendChild(dd);
     
}, function (error) {
   console.log("Error: " + error.code);
});
function enter(){
    var input=document.getElementById('mess');
    var key1=Math.random()*100;
    key = key1.toFixed();
    var chatsz= {
    key : key,
      chattext: mess.value,
    }
    console.log(chatsz);
    firebase.database().ref('mess').child(key).set(chatsz);
mess.value="";
}
function deleteitem(e){
    e.parentNode.remove();
    firebase.database().ref('mess').child(e.id).remove();
   }

