// ====chapter 38-42
// Task 1
// function power(a,b){
//     return a**b;
// }

// Task 2
// function leapyear(year){
//     if(year%4==0){
//         alert("This is a Leap Year");
//     }
// }

// Task 3
// function semiperimeter(a,b,c){
//     return (a+b+c)/2
// }
// function area(a,b,c){
//     var s = semiperimeter(a,b,c);
//     return s*(s-a)*(s-b)*(s-c);
// }

// Task 4
// function average(s1,s2,s3){
//     return (s1+s2+s3)/3;
// }
// function percentage(s1,s2,s3,total){
//     return ((s1+s2+s3)/total)*100;
// }
// function mainFunction(s1,s2,s3,total){
//     var avg = average(s1,s2,s3);
//     var percent = percentage(s1,s2,s3,total);
//     alert("Your average Marks are "+avg.toFixed(2)+"and your percentage is "+percent.toFixed(2));
// }

// Task 5
// function CustomIndexOf(string,word){
//     var string = string.toLowerCase();
//     var word = word.toLowerCase();
//     var index  = -1;
//     for(var i=0;i<string.length;i++){
//         if(string[i]===word[0]){
//             for(var j=1;j<word.length;j++){
//                 if(string[i+j]===word[j]){
//                     var index = i;
//                     continue;
//                 }
//                 else{
//                     index = -1;
//                     break;
//                 }
//             }
//         }
//     }
//     return index;
// }

// Task 6
//  function vowel_remover(sentence){
//         return sentence.replace(/[aeiou]/g,"",);
// }

// Task 7
// function count_vowel(string){
//     var vowels = ["a","e","i","o","u"];
//     var count = 0;
//     for(var x = 0;x<string.length;x++){
//         switch (vowels.includes(string[x]) && vowels.includes(string[x+1])){
//             case true:
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// Task 8
// function dist_in_meters(d){
//     return  d*1000; 
// }
// function dist_in_feet(d){
//     return  d*3281;  //approx 
// }
// function dist_in_inches(d){
//     return  d*39370; 
// }
// function dist_in_centimeters(d){
//     return  d*100000; 
// }
// var distance = prompt("Enter distance between two cities (in km.)");
// var out = "Distance in meters: "+dist_in_meters(distance)+"\n"+
//           "Distance in feet: "+dist_in_feet(distance)+"\n"+
//           "Distance in inches: "+dist_in_inches(distance)+"\n"+
//           "Distance in centimeters: "+dist_in_centimeters(distance)+"\n";
// alert(out);

// Task 9
//  function overtimePay(hours){ 
//     if( hours>40){
//          return (hours-40)*12;
//      }
//      else{
//          return 0;
//      }
//  }
//  var hoursWorked = prompt("Enter the number of hours worked");
// alert("Your overtime pay is "+overtimePay(hoursWorked));

// Task 10

// var amount  = prompt("Enter amount to Withdraw");
// if(amount%10 !== 0){
//     alert("Enter amount in multiple of 10");
// }
// function withdraw(amount){
//     var notes = [10, 50, 100];
//     var out = [];
//     for(var c=notes.length-1;c>=0;c--){
//         out.push((amount-amount%notes[c])/notes[c])
//         amount-= amount-amount%notes[c]
//     }
//     return out;
// }
// document.write("You will have "+withdraw(amount)[0]+" hundred note(s) "+withdraw(amount)[1]+" fifty note(s) "+withdraw(amount)[2]+" ten note(s)")

// ====chapter 43-48====
// Task 1 See HTML

// Task 2 See HTML

// Task 3 Also see HTML
// function rowDelete(rowIndex){
//     document.getElementById("table").deleteRow(rowIndex);
// }
// function rowDelete(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("table").deleteRow(i);
// }

// // Task 4 Also See HTML
// function image1(){
//     var image = document.getElementById('img');
//     image.src = "1.jpg";
// }
// function image2(){
//     var image = document.getElementById('img');
//     image.src = "2.jpg";
// }
// // Task 5 Also See HTML
// var value = document.getElementById("count");
// function increase(){
//     value.innerHTML = +value.innerHTML + 1;
// }
// function decrease(){
//     value.innerHTML -=1;
// }

// =====chapter 49-52
// Task 1 Also see HTML file named index.html
// function displayData(){
//     document.getElementById("email").innerHTML = "Email : " + document.getElementById("inputEmail").value;
//     document.getElementById("password").innerHTML = "Password : " + document.getElementById("inputPassword").value;
//     document.getElementById("fname").innerHTML = "First Name : " + document.getElementById("firstName").value;
//     document.getElementById("lname").innerHTML = "Last Name : " + document.getElementById("lastName").value;
//     document.getElementById("country").innerHTML = "Country : " + document.getElementById("inputCountry").value;
//     document.getElementById("city").innerHTML = "City : " + document.getElementById("inputCity").value;
//     document.getElementById("province").innerHTML = "Province : " + document.getElementById("inputProvince").value;
    
//     }
    
//     Task 2 Also see HTML file named task2.html
//     function readMore(){
//         var text = "Lorem ipsum dolor sit amet, consectetur adipisicing Non labore distinctio reprehenderit, nobis nesciunt velit,magnam repellat ad soluta maiores minima eligendi fugit voluptate ut ipsam. Cum expedita alias eos!";
//         var paragraph  = document.getElementById("para");
//         paragraph.innerHTML = text;
//     }
    
//     Task 3 Also see HTML file named task3.html
    
//     function addStudent(){
//         var tableBody = document.getElementById("tableBody");
//         var Name = document.getElementById("Name").value;
//         var Class = document.getElementById("Class").value;
//         var rowCount = document.getElementById('dataTable').rows.length; row count makes same index row if last is deleted
//         var ind = + tableBody.lastElementChild.firstElementChild.innerHTML + 1;
//         if(Name !="" || Class !=""){
//             tableBody.innerHTML += "<tr><th scope='row'>"+ind+"</th> <td>"+Name+"</td><td>"+Class+"</td><td><button type='button' class='btn btn-warning' onclick = 'editform(this)' >Edit</button></td><td><button type='button' class='btn btn-danger' onclick = 'rowDelete(this)'>Delete</button></td></tr>";
    
//         }
//         else{
//             alert("Input Field is empty");
//         }
//         document.getElementById("Name").value = "";
//         document.getElementById("Class").value = "";
//     }
//     function rowDelete(r){
//         var i = r.parentNode.parentNode.rowIndex;
//         document.getElementById("dataTable").deleteRow(i);
//     }
//     var idx;
//     function editform(r){
//         $('#ModalEdit').modal('show');
//         idx = r.parentNode.parentNode.rowIndex;
//         var editTable = document.getElementById('dataTable');
//         var editCells = editTable.rows.item(idx).cells;
//         var cellName = editCells.item(1).innerHTML;
//         var cellClass = editCells.item(2).innerHTML;
//         document.getElementById("editName").value = cellName;
//         document.getElementById("editClass").value = cellClass;
//     }
//     function edit(idx){
//         var repName = document.getElementById("editName").value;
//         var repClass = document.getElementById("editClass").value;
//         var t = document.getElementById('dataTable');
//         t.rows.item(idx).cells.item(1).innerHTML = repName;
//         t.rows.item(idx).cells.item(2).innerHTML = repClass;
        
    
//     }
//     function reset(){
    
//     }

// =======CHAPTER 53-58====
// Task 1
// var images  = ['images/others/1.jpg','images/others/2.jpg','images/others/3.jpg','images/others/5.jpg'];
// var imgs = document.getElementById("images");
// for(var i=0;i<images.length;i++){
//     imgs.innerHTML += "<img onclick = 'openModal("+i+")' class = 'format' src='"+images[i]+"'>"
// }

// function openModal(idx){
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = "block";
//     var modalimgs = document.getElementById("modal-img");
//     modalimgs.src = images[idx]

// }
// function onClosedImagModal(){
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open')
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

// Task 2
// var para = document.getElementById("para");
// var currentFont = 20;
// para.style.fontSize = (currentFont+"px").toString();
// function zoomIn(){
//     currentFont+=10;
//     para.style.fontSize = (currentFont+"px").toString();

// }
// function zoomOut(){
//     currentFont-=10;
//     para.style.fontSize = (currentFont+"px").toString();

// }


// ====CHAPTER 58-56==
// Task 1
// var main =  document.getElementById("main-content");
// for(var x=0;x<main.children.length;x++){
//     document.write(main.children[x].innerHTML);
// }
// var render =  document.getElementsByClassName("render");
// for(var y=0;y<render.length;y++){
//     document.write(render[y].innerHTML);
// }

// document.getElementById("first-name").value = "Muntaha"
// document.getElementById("last-name").value = "Shams"
// document.getElementById("email").value = "abc@gmail.com"

// Task 2
// var form = document.getElementById("form-content");
// if(form.nodeType === 1){
//     document.write("<br> nodeType of form-content is 1 which means tags like div or p");
// }
// else if(form.nodeType === 3){
//     document.write("<br> nodeType of form-content is 3 which means text");

// }
// var lname = document.getElementById("lastName");
// if(lname.nodeType === 1){
//     document.write("<br> nodeType of lastName is 1 which means tags like div or p");
// }
// else if(lname.nodeType === 3){
//     document.write("<br> nodeType of lastName is 3 which means text");
// }
// for(var z=0;z<lname.children.length;z++){
//     document.write(lname.children[x].innerHTML); 
// }
// no child nodes 
// var fChild = main.firstChild;
// var lChile = main.lastChild;
// var nextSiblings = lname.nextSibling;
// var previousSiblings = lname.previousSibling;

// var email = document.getElementById("email");
// var emailParentNode  = email.parentNode;
// var nodeTypeEmail = email.nodeType;
