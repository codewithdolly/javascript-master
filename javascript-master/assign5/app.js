// //===============CHAPTER-1====================//

// // chp1 TASK:1//
// alert("hi");

// // chp1 TASK:2//
// alert("Error! Please enter a valid password");

// // chp1 TASK:3//
// alert("welcome to JS land...\n Happy Coding");

// // chp1 TASK:4//
// alert("welcome to JS Land");
// alert("Happy Coding");

// // chp1 TASK:5//
// console.log()

// // chp1 TASK:6//
// // Make use of alerts in your new/existing HTML & CSS project.
// <!DOCTYPE html>
// <html>
// <body>
// <script>
//   alert("Hello! I am an alert box!");
// </script>
// </body>
// </html>

// // chp1 TASK:7//
// // Practice placement of <script></script> element in following sections of your project in exercise 6: a. Head b. Body (before your page’s HTML) c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 
{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JAVASCRIPT</title>
    <script src = "app.js"></script>  
</head>

<body>
    <script src = "app.js"></script>
    <h1>JAVASCRIPT</h1>
</body>

<body>
     <h1>JAVASCRIPT</h1>
    <script src = "app.js"></script> 
</body> */}

// //===============CHAPTER-2====================//
// // chp2 TASK:1//
// //  Declare a variable called usernam//
// var username;

// // chp2 TASK:2//
// //  Declare a variable called myName & assign to it a string that represents your Full Name.//
// var MyName="Muntaha Shams";

// // chp2 TASK:3//
// //  Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. //
// var message="hello world";
// alert(message);

// // chp2 TASK:4//
// // Write a script to save student’s bio data in JS variables and show the data in alert boxes//
// var StudentName= "Jhone Doe";
// var StudentAge= "15 years old";
// var StudentField= "certified mobile application development";
// alert(StudentName);
// alert(StudentAge);
// alert(StudentField);
 
// // chp2 TASK:5//
// //Write a script to display the following alert using one JS variable//
// var food="PIZZA";
// alert(food.slice(0,5)+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1))
 
// // chp2 TASK:6//
// // Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)//
// var words="My email address is";
// var email ="example@exmple.com";
// var res =words.concat(email)
// alert(res)

// // chp2 TASK:7//
// //Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box//
// var str1="I am trying to learn from a book";
// var book =" A smarter way to learn JavaScript";
// var res =str1+book
// alert(res)

// // chp2 TASK:8//
// // Write a script to display this in browser through JS //
// document.write("yah! I can write HTML content through javascript")

// // chp2 TASK:9//
// //Store following string in a variable and show in alert and browser through JS //
// var string="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(string)

// //===============CHAPTER-3====================//
// // chp3 TASK:1//
// //Declare a variable called age & assign to it your age. Show your age in an alert box. //
// var age=20;
// alert(age);

// // chp3 TASK:2//
// //Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times//
// var x;
// x=2;
// y="you have visited this site "
// z=" times"
// alert(y+x+z)

// // chp3 TASK:3//
// // Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: //
// var birthYear="1999";
// var str1="My birth year is";
// var str2="Data type of my declared variable is number";
// document.write(str1 +" "+ birthYear+"<br>"+str2);

// // chp3 TASK:4//
// //A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”//
// var VisitorsName="John Dae";
// var ProductTitle="T-shirt";
// var Quantity="5";
// var str1="orderded";
// var str2="(s) from XYZ Clothing Store"
// document.write(VisitorsName.bold()+" "+str1+" "+Quantity.bold()+" "+ProductTitle.bold()+" "+str2);

// //===============CHAPTER-4====================//
// // chp4 TASK:1//
// //Declare 3 variables in one statement. //
// var x="my name"; y="my age"; z="my niche";

// // chp4 TASK:2//
// //Declare 5 legal & 5 illegal variable names.//
// var myName="Muntaha";
// var greeting="how are you?";
// var x$="whts upp?";
// var wht_doing="hi hope you doing good";
// var age="my age is 20";

// var my name="muntaha";
// var const="how are you?";
// var x?="whats upp?";
// var y*="hi hope you doing well";
// var function="ok bye";

// // chp4 TASK:3//
// //Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ //
// var a=  "Variable names can only contain letters,numbers, $ and _. For example $my_1stVariable";
// var b="Variables must begin with a letter,$ or _. For example $name, _name or name";
// var c=" Variable names are case sensitive";
// var d="Variable names should not be JS keyword";
// document.write("<h1> Rules for naming JS variables </h1>");
// document.write(a+"<br>"+b+"<br>"+c+"<br>"+d);

// //===============CHAPTER-5====================//
// // chp5 TASK:1//
// //Write a program that take two numbers & add them in a new variable. Show the result in your browser. //
// var var1=+prompt("enter your variable one");
// var var2=+prompt("enter your variable two");
// var result=var1+var2;
// document.write("Sum of "+var1+ " and "+var2+" " +"is" +" "+result);

// // chp5 TASK:2//
// //. Repeat task1 for subtraction, multiplication, division & modulus.//
// var var1=+prompt("enter your variable one");
// var var2=+prompt("enter your variable two");

// var result=var1-var2;
// document.write("Subtraction of "+var1+ " and "+var2+" " +"is" +" "+result +"<br>");

// var result=var1*var2;
// document.write("Multiplication of "+var1+ " and "+var2+" " +"is" +" "+result +"<br>");

// var result=var1/var2;
// document.write("Division of "+var1+ " and "+var2+" " +"is" +" "+result +"<br>");

// var result=var1%var2;
// document.write("Module of "+var1+ " and "+var2+" " +"is" +" "+result +"<br>");

// // chp5 TASK:3//
// // Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. //
// var x;
// document.write("Value after variable declaration is:"+x+"<br>");
// x=5;
// document.write("Initial value:"+x+"<br>");
// x++;
// document.write("Value after increment is: "+x+"<br>");
// var z=x+7;
// document.write("after addition is:"+z+"<br>");
// z--;
// document.write("Value after decrement is:"+z+"<br>");
// var output=z/3;
// document.write("The remainder is :"+output)

// // chp5 TASK:4//
// // Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. //
// var ticket_price=600;
// var num_ticket=5;
// var output=ticket_price*num_ticket;
// document.write("Total cost to buy "+num_ticket+" is "+output+"PKR");

// // chp5 TASK:5//
// //Write a script to display multiplication table of any number//
// var num=6;	
// 	for (var i=1; i<=10; i++) {   
// 	    document.write(num + ' x ' + i + ' = ' + num*i + '</br>');    
//     }

// // chp5 TASK:6//
// //The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. //
// var celcius=25;
// output=(celcius*9/5)+32;
// document.write(celcius+"°C is "+output+"°F <Br>");
// var Fehreneit=70;
// output2=(Fehreneit-32)*5/9;
// document.write(Fehreneit+"°F is "+output2+"°C");

// // chp5 TASK:7//
// //Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables //
// var item1=1000;
// var item2=2500;
// var quantity1=3;
// var quantity2=1;
// var shipping_charges=200;
// document.write("<h1> Shopping Cart </h1>");
// document.write("Price of item 1 is "+item1 +"<br>");
// document.write("Quantity of item 1 is "+quantity1+"<br>");
// document.write("Price of item 2 is "+item2+"<br>");
// document.write("Quantity of item 2 is "+quantity2+"<br>");
// document.write("Shipping charges "+shipping_charges+"<br>"+"<br>");
// var total_cost=item1*quantity1+item2*quantity2+shipping_charges;
// document.write("Toatl Cost of your order "+total_cost);

// // chp5 TASK:8//
// //Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the resul//
// var total_marks=1100;
// var marks_obtaine=904;
// var percentage=(marks_obtaine/total_marks)*100;
// document.write("<h1> Mark Sheet </h1>");
// document.write("Total marks:"+total_marks+"<br>");
// document.write("Marks obtained:"+marks_obtaine+"<br>");
// document.write("Pertentage:"+percentage);

// // chp5 TASK:9//
// //Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression//
// var dollars=10;
// var saudi_riyal=25;
// var total_currency=104.80*dollars+28*25;
// document.write("<h1> Currency in PKR </h1>");
// document.write("Total Currency in PKR:"+total_currency);

// // chp5 TASK:10//
// // Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression//
// var number=5;
// var result=[(number+5)*10]/2;
// document.write("final output is "+result);

// // chp5 TASK:11//
// //The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old//
// var birth_year=+prompt("enter your birth year is:");
// var current_year=2020;
// var age=current_year-birth_year;
// document.write("<h1> Age Calcuator </h1>");
// document.write("birth year:"+birth_year+"<br>");
// document.write("current year:"+current_year+"<br>");
// document.write("Your age is:"+age);

// // chp5 TASK:12//
// // The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) //
// var radius=20;
// var circum=2*3.142*radius;
// var area=2+3.142*radius*radius;
// document.write("<h1> The Geometrizer</h1>");
// document.write("Radius of a circle:"+radius+"<br>");
// document.write("The circumference is:"+circum+"<br>");
// document.write("The  area is :"+area);

// // chp5 TASK:13//
// //The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.//
// var snack="lays";
// var age=20;
// var max_age=65;
// var amount=1;
// var result=(max_age-age)*amount;
// document.write("<h1> The Lifetime Supply Calculator</h1>");
// document.write("You will need "+result+" to last you until the ripe old age of "+max_age);

// //===============CHAPTER-6-9 ==================== //
// // chp 6-9 TASK:1//
// //Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser//
// var a=10;
// document.write("Result"+"<br>"+"the value of a is :"+a+"<br>");
// document.write("......................................." + "<br>"+"<br>");

// x=++a;
// document.write("the value of ++a is :"+ x +"<br>");
// document.write(" Now the value of a is :"+ a +"<br>"+"<br>");

// y=a++;
// document.write("the value of a++ is :"+ y +"<br>");
// document.write("Now the value of a is :"+ a +"<br>"+"<br>");

// z=--a;
// document.write("the value of --a is :"+ z +"<br>");
// document.write("Now the value of a is :"+ a +"<br>");

// // chp 6-9 TASK:2//
// //What will be the output in variables a, b & result after execution of the following script//
// var a = 2;
// var b = 1; 
// document.write("a is:"+a+"<br>");
// document.write("b is:"+b+"<br>"+"<br>");

// var result = --a - --b + ++b + b--; 
// //             1 -  0   +  1  + 1 = 3
// document.write("result is:"+result+"<br>"+"<br>");

// var a = 2;
// w= --a; 
// document.write("in --a, 'a' is undergoes decrement so from 2 it reduces to 1 and output become:"+ w + "<br>"+"<br>");

// var a = 2;
// var b = 1; 
// x= --a - --b;
// document.write("in --a - --b , both 'a' and 'b' undergoes decrement so 'a' from  2 is reduces to 1 and 'b' from 1 reduces to 0, 1-0 so output become:"+ x + "<br>"+"<br>");

// var a = 2;
// var b = 1;
//  y= --a - --b + ++b;
// // 1  -  0  + 1= 2
// document.write("in --a - --b + ++b , first both 'a' and 'b' undergoes decrement so 'a' from  2 is reduces to 1 and 'b' from 1 to 0 then 'b' is increment by so from agian 0 it become 1, 1+0+1 and output become:"+ y + "<br>"+"<br>");


// var a = 2;
// var b = 1
// z= --a - --b + ++b + b--;
// //  1  -  0  - 1   + 1
// document.write("in --a - --b + ++b + b--, both 'a' and 'b' undergoes decrement so 'a' from  2 is reduces to 1 and and 'b' from 1 to 0 then 'b' is increment by so from agian 0 it become 1, 1-0- 1+1 and output become:"+ z + "<br>"+"<br>");

// // chp 6-9 TASK:3//
// //Write a program that takes input a name from user & greet the user//
// var Name=prompt("enter your name");
// document.write("Hi! "+Name+ "<br>" +"How are you?");

// // chp 6-9 TASK:5//
// //Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by defaul//
// var num; 
// if (num=+prompt("Table of:")){
// 	for (var i=1; i<=10; i++) {   
// 	    document.write(num + ' x ' + i + ' = ' + num*i + '</br>');    
//     }
// }
// else if (num === num) {
//     x=5;
//     for (var i=1; i<=10; i++) {   
// 	    document.write(x + ' x ' + i + ' = ' + x*i + '</br>');    
//     }
// }

// // chp 6-9 TASK:6//
// //Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)//
// var subj1 =prompt("enter your 1st subject name:");
// var subj2=prompt("enter your 2nd subject name:");
// var subj3=prompt("enter your 3rd subject name:");
// var total_marks=100;
// var total_marks_all=300;
// var marks1=+prompt("Marks obtain in 1st subj:");
// var marks2=+prompt("Marks obtain in 2nd subj:");
// var marks3=+prompt("Marks obtain in 3rd subj:");
// var total_num=marks1+marks2+marks3;
// var percent1= (marks1/total_marks)*100;
// var percent2= (marks2/total_marks)*100;
// var percent3= (marks3/total_marks)*100;
// var total_percentage=percent1+percent2+percent3;
// document.write("Subject".bold()+" "+" Total marks".bold()+" "+"Obtained Marks".bold()+" "+"Percentage".bold()+"<br>")
// document.write(subj1+" "+total_marks+" "+marks1+" "+percent1+"%"+"<br>")
// document.write(subj2+" "+total_marks+" "+marks2+" "+percent2+"%"+"<br>")
// document.write(subj3+" "+total_marks+" "+marks3+" "+percent3+"%"+"<br>")
// document.write('&nbsp;'+'&nbsp;'+total_marks_all+" "+total_num+" "+total_percentage+"%"+"<br>")


// //===============CHAPTER-9-11 ==================== //
// // chp 9-11 TASK:1//
// //Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”//
// var city=prompt("enter city name:");
// city=city.toLowerCase();
// if (city==="karachi"){
//     alert("Welcome to city of lights");
// }

// // chp 9-11 TASK:2//
// //Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am//
// var gender=prompt("enter your gender:");
// gender=gender.toLowerCase();
// if (gender==="male"){
//     alert("Good Morning! Sir");
// }
// else if(gender==="female") {
//     alert("Good Morning! Maam");
// }
// else{
//     alert("enter correct gender")
// }

// // chp 9-11 TASK:3//
// //Write a program to take input color of road traffic signal from the user & show the message according to this tabl
// var signal_color=prompt("enter signal color ")
// if(signal_color==="red"){
//     alert("must stop")
// }
// else if(signal_color==="yellow"){
//     alert("ready to move")
// }
// else if(signal_color==="green"){
//     alert("move now")
// }
// else{
//     alert("enter correct")
// }

// // chp 9-11 TASK:4//
// // Write a program to take input color of road traffic signal from the user & show the message according to this table//
// var fuel=prompt("enter you remiang fuel in car in liters");
// if (fuel<= 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("hooo! continue your ride");
// }

// // chp 9-11 TASK:5//
// // Run this script, & check whether alert message would be displayed or not.//
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } // alert displayed

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// } // alert not displayed

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }// alert not displayed
// if (c === 13) { 
//     alert("condition 2 is true"); 
// } // alert displayed
// if (++c < 14) { 
//     alert("condition 3 is true"); 
// }// alert not displayed
// if (c === 14) { 
//     alert("condition 4 is true"); 
// } // alert displayed

// var materialCost = 20000;
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }// alert displayed

// if (true){ 
//     alert("True"); 
// } // alert displayed

// if (false){
//      alert("False");
//  } // alert not displayed
 
// if("car" < "cat"){
//      alert("car is smaller than cat");
// 	 } // alert displayed

// // chp 9-11 TASK:6//
// // Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following tabl//
// var marks_obtain1=+prompt("enter your marks obtain in English")
// var marks_obtain2=+prompt("enter your marks obtain in URdu")
// var marks_obtain3=+prompt("enter your marks obtain in Maths")
// var marks_total=+prompt("enter your total marks ")
// var marks_obtain=marks_obtain1+marks_obtain2+marks_obtain3;
// var percentage=(marks_obtain/marks_total)*100;
// document.write("<h1>Marks Sheet</h1>"+"<br>")
// document.write("Total Marks:"+marks_total+"<br>")
// document.write("Percentage:"+percentage+"%"+"<br>")

// if (percentage>=80){
//     document.write("Grade:A-ONE"+"<br>")
//     document.write("Remarks:Exellent")
// }
// else if (percentage>=70){
//     document.write("Grade:A"+"<br>")
//     document.write("Remarks:Good")
// }
// else if (percentage>=60){
//     document.write("Grade:B"+"<br>")
//     document.write("Remarks:You need to improve")
// }
// else if (percentage<60){
//     document.write("Grade:FAIL"+"<br>")
//     document.write("Remarks:sorry")
// }


// // chp 9-11 TASK:7//
// // Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”//
// var secrect_num=7;
// var guess_num=+prompt("guess the number ranging from 0-10");
//   if (guess_num===secrect_num){
//       alert("bingo! correct answer");
//   }
//   else if( guess_num=== secrect_num+1){
//       alert("Close enough to the correct answer");
//   }
//   else{
//       alert("try agian")
//   }

// // chp 9-11 TASK:8//
//   //Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3//
//   var num=+prompt("enter a number ");
//  if (num%3===0){
//      alert("number is divisible by 3");    
//  }
//  else{
//     alert("number is not divisible by 3"); 
//  }

// // chp 9-11 TASK:9//
//  //Write a program that checks whether the given input is an even number or an odd number//
//  var num=+prompt("enter a number ");
//  if (num%2===0){
//      alert("number is even");    
//  }
//  else{
//     alert("number is odd"); 
//  }

// // chp 9-11 TASK:10//
//  //Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” //
//  var num=+prompt("enter a tempertaure ");
//  if (num>40){
//      alert("It is too hot outside");    
//  }
//  else if(num> 30){
//     alert("The Weather today is Normal."); 
//  }
//  else if(num> 20){
//     alert("Today’s Weather is cool"); 
//  }
//  else if(num> 10){
//     alert("OMG! Today’s weather is so Cool."); 
//  }

// // chp 9-11 TASK:11//
//  //Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user//
//  var num1=+prompt("enter 1st number");
// var op=prompt("enter operator");
// var num2=+prompt("enter 2nd number");
// if (op=="+"){
//     result=num1+num2;
// }
// else if (op=="-"){
//     result=num1-num2;
// }
// else if (op=="*"){
//     result=num1*num2;
// }
// else if (op=="/"){
//     result=num1/num2;
// }
// else if (op=="%"){
//     result=num1%num2;
// }
// else{
//     alert("enter correct operator")
// }
// alert("your result will be: "+result);

// //===============CHAPTER-12-13====================  //
// // chp 12-13 TASK:1//
// //Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)//
// var num=prompt("enter  character (number or string) ")
// ch=num.charCodeAt(0);; 
// 	if ( ch>=65 && ch<=90){
//         alert("Character is a capital letter");
//     }
// 	else if (ch>=97 && ch<=122){
//         alert("Character is a small letter");
//     }
// 	else if (ch>=48 && ch<=57){
//         alert("Character is a digit");
//     }
	
// // chp 12-13 TASK:2//
// //Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equa//
// var int1=+prompt("enter interger 1");
// var int2=+prompt("enter interger 2");
// if(int1>int2){
//     alert("interger 1 is larger tha integer 2")
// }
// else if(int1===int2){
//     alert("both intergers are equal")
// }
// else{
//     alert("interger 2 is greater than interger 1")
// }

// // chp 12-13 TASK:3//
// // Write a program that takes input a number from user & state whether the number is positive, negative or zero//
// var int1=+prompt("enter any interger ");
// if(int1<0){
//     alert("interger is negative")
// }
// else if(int1===0){
//     alert("interger is zero")
// }
// else{
//     alert("interger is positive")
// }

// // chp 12-13 TASK:4//
// //Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise //
// var vowel=prompt("enter vowel alphabet");
// vowel=vowel.toLowerCase();
// if(vowel == "a" || vowel =="e" || vowel =="i" ||vowel == "o" ||vowel == "u"){
//     alert("true");
// }
// else{
//     alert("false");
// }

// // chp 12-13 TASK:5//
// //Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.//
// var correct_pas= "pakistan123";
// var guess_password=prompt("Please enter your password");
// if (guess_password===correct_pas){
//     alert("“Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password")
// }

// // chp 12-13 TASK:6//
// //This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } //
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting == "Good day";
// }
// else {
//      greeting == "Good evening"; 
// 	}
    
// // chp 12-13 TASK:7//
// //Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements //
// var time=+prompt("enter time in 24 hours clock format like: 1900 = 7pm");
// if (time>=0000 && time<1200){
//     alert("good morning!")
// }
// else if(time>=1200 && time<1700){
//     alert("good afternoon!")
// }
// else if(time>=1700 && time<2100){
//     alert("good evening!")
// }
// else if(time>=2100 && time<2359){
//     alert("good night!")
// }
// else{
//     alert("enter in correct format")
// }

// //===============CHAPTER-14-16==================== //
// // chp 14-16 TASK:1//
// //Declare an empty array using JS literal notation to store student names in future//
// var array=[];

// // chp 14-16 TASK:2//
// //Declare and initialize a strings array//
// var array=["Ali","Sabahat","Amna"];

// // chp 14-16 TASK:3//
// //Declare and initialize a numbers array.//
// var array=[2,4,6];

// // chp 14-16 TASK:4//
// // Declare and initialize a boolean array.//
// var array=[true,false,true];

// // chp 14-16 TASK:5//
// //Declare and initialize a mixed array//
// var array=[2,"karachi",true];

// // chp 14-16 TASK:6//
// //Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like//
// var qualification;
// qualification=[" SSC", "HSC", "BCS", "BS","BCOM","MS","M. Phil.","PhD"];
// document.write("<h1>Qualification</h1>");
// document.write("1)"+qualification[0]+"<br>"+"2)"+qualification[1]+"<br>"+"3)"+qualification[2]+"<br>"+"4)"+qualification[3]+"<br>"+"5)"+qualification[4]+"<br>"+"6)"+qualification[5]+"<br>"+"7)"+qualification[6]+"<br>"+"8)"+qualification[7])

// // chp 14-16 TASK:7//
// //Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students l//
// var students=["Ali","Usman","Ahmed"];
// var score=[400,480,400];
// var total=500;
// var percent0=(score[0]/total)*100;
// var percent1=(score[1]/total)*100;
// var percent2=(score[2]/total)*100;
// document.write("score of "+ students[0]+" is "+score[0]+".Percentage:"+percent0+"%"+"<br>");
// document.write("score of "+ students[1]+" is "+score[1]+".Percentage:"+percent1+"%"+"<br>");
// document.write("score of "+ students[2]+" is "+score[2]+".Percentage:"+percent2+"%"+"<br>");

// // chp 14-16 TASK:8//
// //Initialize an array with color names. Display the array elements in your browser//
// var colors=[];

// // chp 14-16 TASK:9//
// //Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array//
// var new_color1=prompt("what color you want to add at the begining of array");
// colors.unshift(new_color1);
// document.write("color added at start="+colors+"<br>");

// // Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.//
// var new_color2=prompt("what color you want to add at the end of array");
// colors.push(new_color2);
// document.write("color added at end="+colors+"<br>");

// // Add two more color to the beginning of the array. Display the updated array in your browser. //
// var new_color3=prompt("what color=1 you want to add at the begining of array");
// var new_color4=prompt("what color=2 you want to add at the begining of array");
// colors.unshift(new_color3,new_color4);
// document.write("colors added at begin="+colors+"<br>");

// //Delete the first color in the array. Display the updated array in your browser.//
// colors.shift();
// document.write("first color delete="+colors+"<br>");

// //Delete the last color in the array. Display the updated array in your browser//
// colors.pop();
// document.write("last color delete="+colors+"<br>");

// // Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser//
// var index=prompt("at what index you want to add color");
// var new_color5=prompt("enter color");
// colors.splice(index,0,new_color5);
// document.write("color(s) addded at "+index +"="+colors+"<br>");

// // Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. //
// var index2=prompt("at what index you want to remove color");
// var index3=prompt("enter how many colors you want to delete");
// colors.splice(index2,index3);
// document.write(index3+" color(s) remove from  "+index2 +"="+colors+"<br>");

// // chp 14-16 TASK:10//
// //Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. //
// var numbers=[100,200,300,400];
// var sorted=numbers.sort();
// document.write(numbers+"<br>");
// document.write("sorted array is="+sorted)

// // chp 14-16 TASK:11//
// //Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.//
// var cities=["karachi","peshawar","lahore","islamabad","multan"];
// var selected_cities=cities.slice(2,4);
// document.write("cities="+cities+"<br>");
// document.write("selected cities="+selected_cities);

// // chp 14-16 TASK:12//
// // Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) //
// var arr = ["This", "is", "my", "cat"]; 
// var arr_join=arr.join(" ");
// document.write("array= "+arr+"<br>");
// document.write("array join= "+arr_join)

// // chp 14-16 TASK:13//
// //Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) //
// var devices=[];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices"+"<br>"+devices+"<br>"+"<br>");
// document.write("Out"+"<br>");
// document.write(devices[0]+"<br>"+devices[1]+"<br>"+devices[2]+"<br>"+devices[3])

// // chp 14-16 TASK:14//
// //Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)//
// var devices=[];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// var reverse_devices=devices.reverse();
// document.write("Devices"+"<br>"+devices+"<br>"+"<br>");
// document.write("Out"+"<br>"+reverse_devices[0]+"<br>")
// document.write("Out:"+"<br>"+reverse_devices[1]+"<br>")
// document.write("Out:"+"<br>"+reverse_devices[2]+"<br>")
// document.write("Out:"+"<br>"+reverse_devices[3]+"<br>")

// // chp 14-16 TASK:15//
// //Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: //
//var mobile=["Apple", "Samsung","Motorola","Nokia","Sony"," Haier"];

//document.write("<select>")
//    for (var i=0; i<mobile.length;i++){
//        document.write("<option>"+mobile[i]+"</option>")
//    }
//document.write("</select>")

// //===============CHAPTER-17-20====================//
// // chp 17-20 TASK:1//
// //Declare and initialize an empty multidimensional array. (Array of arrays)//
// let temps = [
//     [],
//     []
//  ];

// // chp 17-20 TASK:2//
//  //Declare and initialize a multidimensional array representing the following matrix//
//  let temps = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
//  ];
 
//  document.write(temps[1]+"<br>")
//  document.write(temps[1]+"<br>")
//  document.write(temps[1]+"<br>")

// // chp 17-20 TASK:3//
//  //. Write a program to print numeric counting from 1 to 10.  //
//  var x;
// for (x=0; x<=10; x++){
//    document.write(x+"<br>")
// }

// // chp 17-20 TASK:4//
// //Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from use//
// var num=+prompt("Enter a number to show its multiplication table");	
// var len=+prompt("enter a length of multiplication table")
// document.write("Multiplication table of "+num+"<br>");
// document.write("length "+len+"<br>")
// 	for (var i=1; i<=len; i++) {   
// 	    document.write(num + ' x ' + i + ' = ' + num*i + '</br>');    
//     }

// // chp 17-20 TASK:5//
// //Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] //
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] 
// var i;
// for (i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")
// }
// document.write("<br>")
// for (j=0;j<fruits.length; j++){
//     document.write("Element at index "+j+" is "+fruits[j]+"<br>")
// }

// // chp 17-20 TASK:6//
// //Generate the following series in your browse//
// var counting;
// document.write("<h5>Counting</h5>")
// for (counting=1; counting<=15; counting++){
//     document.write(counting+",")
// }

// var rev_counting;
// document.write("<h5>Reverse Counting</h5>")
// for (rev_counting=10; rev_counting>=1; rev_counting--){
//     document.write(rev_counting+",")
// }

// var even;
// document.write("<h5>even</h5>")
// for (even=0; even<=20; even=even+2){
//     document.write(even+",")
// }
// var odd;
// document.write("<h5>odd</h5>")
// for (odd=1; odd<=20; odd=odd+2){
//     document.write(odd+",")
// }

// var series;
// document.write("<h5>series</h5>")
// for (series=2; series<=20; series++){
//     document.write(series+"k,")
// }

// // chp 17-20 TASK:7//
// // You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example//
// var A = ["cake", "apple pie", "cookie", "chips", "patties"] 
// var item=prompt("welcome to ABC bakery what would you like to order sir/maam")
// var matchFound = false;
// var str="available";
//     str=str.bold();
// var str2=" not available";
//     str2=str2.bold();
// for (var i = 0; i <= A.length; i++){
//    if (item === A[i]) {  
//     matchFound = true; 
//        document.write(item+ " is "+str+" at index "+i +" in our bakery"); 
      
//        } 
//     }   
// if(matchFound === false){
//     document.write("We are sorry. "+item+ " is "+str2+" at in our bakery");   
// }

// // chp 17-20 TASK:8//
// //Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]//
// var array= [24, 53, 78, 91, 12];
// var largest= array[0];

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// document.write("Array items: "+array+"<br>");
// document.write("the largest number is "+largest)

// // chp 17-20 TASK:9//
// //Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] //
// var array = [24, 53, 78, 91, 12];
// var smallest= array[0];

// for (i=0; i<=smallest;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }
// document.write("Array items: "+array+"<br>");
// document.write("the smallest number is "+smallest)

// // chp 17-20 TASK:10//
// //Write a program to print multiples of 5 ranging 1 to 100.//
for (var z=5; z<=100; z=z+5){
    document.write(z+",")
}

























