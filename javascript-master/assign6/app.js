// //============chapter 21===============
// // chp21 task 1
// var FisrtName=prompt("Enter your first name")
// var SecondName=prompt("Enter your second name")
// var FullName=FisrtName+" " +SecondName
// alert("hello"+" "+FullName)

// // chp 21 task 2
// var favPhone=prompt("enter your favorite mobile phone model")
// var length=favPhone.length
// document.write("My favorite phone is :"+favPhone+"<br>")
// document.write("length of string:"+length)

// chp 21 task 3
// var str = "Pakistani"
// var segIndex = str.indexOf("n");
// document.write("String: "+str+"<br>")
// document.write("index of 'n': "+segIndex)

// chp 21 task 4
// var str = "Hello World"
// var segIndex = str.lastIndexOf("l")
// document.write("String: "+str+"<br>")
// document.write("Last index of 'l': "+segIndex)

// chp 21 task 5
// var str = "Pakistani"
// var segIndex = str.charAt(3);
// document.write("String: "+str+"<br>")
// document.write("Character at index 3 is: "+segIndex)

// chp 21 task 6
// var FisrtName=prompt("Enter your first name")
// var SecondName=prompt("Enter your second name")
// var FullName=FisrtName.concat(SecondName)
// alert("hello"+" "+FullName)

// chp 21 task 7
// var city="Hydrabad"
// var newCity = city.replace("Hydra", "Islama");
// document.write("City: "+city+"<br>")
// document.write("After Replacement: "+newCity)

// chp 21 task 8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var newText = message.replace(/and/g, "&");
// document.write(newText)

// chp 21 task 9
// var str="476";
// var char=parseInt(str);
// document.write("Value: "+str+"<br>"+"Type:String"+"<br>")
// document.write("Value: "+char+"<br>"+"Type:Interger")

// chp 21 task 10
// var userInput=prompt("enter any word")
// var capWord=userInput.toUpperCase()
// document.write("User Input: "+userInput+"<BR>")
// document.write("Upper Case: "+capWord)

// chp 21 task 11
// var userInput=prompt("enter any word")
// var str1=userInput.slice(0,1).toUpperCase()
// var str2=userInput.slice(1).toLowerCase()
// document.write("User Input: "+userInput+"<BR>")
// document.write("Title Case: "+str1+str2)

// chp 21 task 12
// var num = 35.36 ;
// var num1=num * 100;
// var string=num1.toString()
// document.write("Number: "+num+"<BR>")
// document.write("Result: "+string)

// chp 21 task 13
// var userName=prompt("enter your name")
// for (var i=0; i<=userName.length; i++){
//     var j=userName.charCodeAt(i)
//     if(j===33 || j===44 || j===46 || j===64){
//         alert("please enter a valid username")
//     }
// }

// chp 21 task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"] 
// var item=prompt("welcome to ABC bakery what would you like to order sir/maam")
// item=item.toLowerCase()
// var matchFound = false;
// var str="available";
//     str=str.bold()();
// var str2=" not available";
//     str2=str2.bold()();
// for (var i = 0; i <= A.length; i++){
//    if (item === A[i]) {  
//     matchFound = true; 
//        document.write(item+ " is "+str+" at index "+i +" in our bakery"); 
      
//        } 
//     }   
// if(matchFound === false){
//     document.write("We are sorry. "+item+ " is "+str2+" at in our bakery");   
// }

// chp 21 task 15
//  var inputtxt=prompt("enter a password")
 
//  if (inputtxt.length>=6){
//    if(inputtxt[0]===0||1||2||3||4||5||6||8||9){
//        alert("Password should not start with a number")
//    }
//    else{
//     alert("Valid password")
//    }
//  }
// else{
//        alert("password  must at least 6 characters long")
//    }
 
// chp 21 task 16
// var university = "University of Karachi";
// var res = university.split("")
// for(var j=0; j<university.length; j++){ 
//    document.write(res[j]+"<br>")
// }

 
// chp 21 task 17
// var userInput=prompt("enter a word")
// var res = userInput.charAt(userInput.length-1);
// document.write("String: "+userInput+"<br>")
// document.write("last character of input is: "+res)

// chp 21 task 18
// var temp="The quick brown fox jumps over the lazy dog";
// var str=temp.toLowerCase()
// var count = (str.match(/the/g)).length;
// document.write("Text: "+temp+"<br>");
// document.write("There are "+count+" occurrences of word “the” ")

// //============chapter 26 -30===============
// chp 26-30 task 1
// var num=+prompt("enter a positive number")
// if(num>0){
//     document.write("Number:"+num+"<br>");
//     document.write("round off value:"+Math.round(num)+"<Br>")
//     document.write("floor value:"+Math.floor(num)+"<Br>")
//     document.write("ceil value:"+Math.ceil(num)+"<Br>")
// }
// else{
//     document.write("enter only positive number")
// }

// chp 26-30 task 2
// var num=+prompt("enter a negtive floating number")
// if(num<0){
//     document.write("Number:"+num+"<br>");
//     document.write("round off value:"+Math.round(num)+"<Br>")
//     document.write("floor value:"+Math.floor(num)+"<Br>")
//     document.write("ceil value:"+Math.ceil(num)+"<Br>")
// }
// else{
//     document.write("enter only positive number")
// }

// chp 26-30 task 3
// var num=+prompt("enter a number")
// if(num<0){
//     document.write("the absolute value of number of "+num+" is "+num*-1)
// }
// else if (num>0)
// {
//     document.write("the absolute value of number of "+num+" is "+num)
  
// }

// chp 26-30 task 4
// var num=Math.random()*6+1;
// var result=Math.floor(num)
// document.write("ramdon dice value is: "+result+"<br>")

// chp 26-30 task 5
// var num=Math.random()*2+1;
// var result=Math.floor(num)
// if(result==2){
//     document.write(result+"<br>"+"ramdon coin value is:Head")
// }
// else if(result==1){
//     document.write(result+"<br>"+"ramdon coin value is:tail")
// }

// chp 26-30 task 6
// var num=Math.random()*101;
// var result=Math.floor(num)
// document.write(" random number between 1 and 100: "+result+"<br>")

// chp 26-30 task 7
// var weight=prompt("enter your weights in kilogram")
// if (weight % 1 == 0){
//     var output=parseInt(weight)
// }
// else if (weight % 1 != 0){
//     var output=parseFloat(weight)
// }
// document.write("the weight of the user is:"+output+" kilogram")

// chp 26-30 task 8
// var num=Math.random()*11;
// var result=Math.floor(num)
// var input=+prompt(" random number between 1 and 10: ")
// if (input===result){
//     alert("congratulate")
// }
// else{
//     alert("try again")
// }

// //============chapter 31-34===============
// chp 31-34 task 1
// document.write(new Date())

// chp 31-34 task 2
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// document.write("The current month is: " + monthNames[d.getMonth()]);

// chp 31-34 task 3
// const weekNames = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];

// const d = new Date();
// alert("Today is: " + weekNames[d.getDay()]);

// chp 31-34 task 4
// const weekNames = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
// const d = new Date();
// if(weekNames[d.getDay()]=="Sat" || weekNames[d.getDay()]=="Sun"){
//     alert("its fun day")
// }

// chp 31-34 task 5
// var date=new Date();
// var dayOfMonth = date.getDate();
// if(dayOfMonth<=15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// chp 31-34 task 6
// var date=new Date();
// document.write("Current Date: "+date+"<br>")
// var jan1970=date.getTime()
// document.write("Elasped milliseconds since 1 january 1970: "+jan1970+"<br>")
// var minute=jan1970/60000;
// document.write("Elasped minutes since 1 january 1970: "+minute+"<br>")

// chp 31-34 task 7
// var date=new Date();
// var hours=date.getHours();
// if(hours>12){
//     alert("its PM")
// }
// else{
//     alert("Its AM")
// }

// chp 31-34 task 8
// var doomsday = new Date("June 30, 2035");
// document.write("Later Date: "+LaterDate)

// chp 31-34 task 9
// var today = new Date();
// var doomsday = new Date("June 18, 2015");
// var msToday = today.getTime(); 
// var msDoomsday = doomsday.getTime()
// var msDiff = msToday - msDoomsday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// document.write(dDiff+" Days have passed since 1st Ramadan,2015")

// chp 31-34 task 10
// var date=new Date();
// var new_date=new Date("January 1,2015")
// var msToday = date.getTime(); 
// var msDoomsday = new_date.getTime()
// var msDiff = msToday - msDoomsday;
// var seconds=msDiff/1000;
// document.write("On reference date: " +date+",<br>")
// document.write(seconds+" seconds had passed since the beginning of 2015")

// chp 31-34 task 11
// var date=new Date();
// document.write("Current date: " +date+",<br>")
// date.setHours(date.getHours()-1)
// document.write("1 hour ago,it was "+date)

// chp 31-34 task 12
// var date=new Date();
// document.write("Current date: " +date+",<br>")
// date.setFullYear(date.getFullYear()-100)
// document.write("100 years back,it was "+date)

// chp 31-34 task 13
// var year=+prompt("enter your birth year");
// var date=new Date()
// var birth_year=date.getFullYear()-year
// document.write("your age is :"+year+"<br>")
// document.write("your birth year is :"+birth_year)


// chp 31-34 task 14
// document.write("<h1>K-ELECTRIC BILL</h1>"+"<br>")

// var customerName="ABC Customer"
// document.write("Customer Name:"+customerName.bold()+"<br>")

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// document.write("Month: " + monthNames[d.getMonth()].bold()+"<br>");

// var units=410;
// document.write("Number of Units:<strong>"+units+"</strong><br>")

// var Charges_per_unit=16;
// document.write("Charges per Units:<strong>"+Charges_per_unit+"</strong><br>"+"<br>")

// var net_amount= units * Charges_per_unit
// document.write(" Net Amount Payable (within Due Date) :<strong>"+net_amount+"</strong><br>")

// var late_pay=350;
// document.write("Late Payment Surcharge:<strong>"+late_pay+"</strong><br>")

// var gross_pay= net_amount + late_pay;
// document.write(" Gross Amount Payable (after Due Date):<strong>"+gross_pay+"</strong>")

//============chapter 35-38===============
// chp 35-38 task 1
// function date(){
//     var d=new Date()
//     document.write(d)
// }
// date()

// chp 35-38 task 2
// function greet(FisrtName,SecondName){
//     alert("Hi! "+FisrtName+" "+SecondName)
// }

// greet(prompt("enter your first name"),prompt("enter your second name"))


// chp 35-38 task 3
// function add(x,y){
//   alert(x+y);
// }
// add(+prompt("enter 1st number:"),+prompt("enter 2nd number"))


// chp 35-38 task 4
// function calc(num1,operator,num2){
//   if (operator=="+"){
//       alert(num1+num2)
//   }
// else if (operator=="-"){
//     alert(num1-num2)
// }
// else if(operator=="*"){
//     alert(num1*um2)
// }
// else if (operator=="/"){
//     alert(num1/num2)
// }
// else if (operator=="%"){
//     alert(num1%num2)
// }
// else{
//     alert("incorrect operator")
// }
// }

// calc(+prompt("enter first number"),prompt("enter operator"),prompt("enter second number"))


// chp 35-38 task 5
// function calculateSquare(x){
//     alert("calculateSquare of "+x+" is "+x*x)
// }
// calculateSquare(+prompt("enter a number"))

// chp 35-38 task 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//    return answer
//     }
//     else{
//     for(var i = n; i >= 1; i--){
//     answer = answer * i;
//     }
//     return answer
// } }
// let n = +prompt("enter a number");
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);

// chp 35-38 task 7
// function sum(FirstNumber,SecondNumber ) {
//     var result = 0;
//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//       result = i;  
//       document.write(result+"<br>");
//     }
    
// }
// sum(+prompt("enter 1t number"),+prompt("enter 2nd number"))

// chp 35-38 task 8
// function calculateHypotenuse (m, n) {        // outer function  
//     function calculateSquare(num) {         // inner function
//        return num * num; 
//     }
//     return Math.sqrt(calculateSquare(m) + calculateSquare(n));
// }
// alert("hypotenuse will be:"+calculateHypotenuse(+prompt("enter base value:"),+prompt("enter base value:"))); 

// chp 35-38 task 9
// function area(){
//     alert("area of a rectangle:"+10*30)
//  }
//  area(10,30)

// function area(width,height){
//    alert("area of a rectangle:"+width*height)
// }
// area(+prompt("enter width:"),+prompt("enter height:"))

// chp 35-38 task 10
// function palindrome(str){
// var newStr= str.split("").reverse().join("");
// if(str==newStr){
// alert("it's a Palindrome.");
// }
// else{
// alert("not a Palindrome");
// }
// }
// palindrome(prompt("enter a palindrome word"));

// chp 35-38 task 11
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
 
//  document.write(titleCase("the quick brown for"));

// chp 35-38 task 12
// function findLongestWord(str) {
//     const stringArray = str.split(" ");
//     const longestWord = stringArray.reduce((a, b) => {
//       if(b.length > a.length) {
//         return b;
//       } else {
//         return a;
//       }
//     });
//     return longestWord;
//   }
// let str = "Web Development Tutorial"
// longestWord = findLongestWord(str)
// document.write("String:"+str+"<br>")
// document.write("The largest word is :"+longestWord);

// chp 35-38 task 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// var counter=char_count(prompt("enter string"),prompt("enter letter"));
// alert("the letter found "+counter +" times in string")

// chp 35-38 task 14
// function calcCircumference(r){
//   alert("The circumference is:"+ 2*3.142*r);
// }
// function calcArea(r){
//     alert("The area is:"+ 3.142*r*r);
 
// }
// var radius=+prompt("enter radius")
// calcCircumference(radius)
// calcArea(radius)


 
