function insert(num){
    var result=document.getElementById("textview")
    result.value += num;
}
function equal(){
    var result=document.getElementById("textview")
    result.value =eval(result.value)
}
function clean(){
    var result=document.getElementById("textview")
    result.value=""
}
function back(){
    var result=document.getElementById("textview").value;
    result = result.slice(0,-1);
    document.getElementById("textview").value = result;
  }