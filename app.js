// Q1: Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

document.write(`<b>1:</b> `)

var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write(`Sum of 3 and 5 is <b>${sum}</b> <br>`);

// Q2.Repeat task1 for subtraction, multiplication, division &modulus.

document.write(`<h1><b>2: Addition & Subracrtion</b></h1>  `)

var diffrence = num1 + num2;
document.write(`Addition of 5 + 3 = <b>${diffrence}</b> <br>`);

var diffrence = num1 - num2;
document.write(`Subtracrt of 5 - 3 = <b>${diffrence}</b> <br>`);

var product = num1 * num2;
document.write(`Multiply of 5 x 3 = <b>${product}</b> <br>`);

var devision  = num1 / num2;
document.write(`Devision of 5 / 3 = <b>${devision.toFixed (2)}</b> <br>`)

var percentage  = num1 % num2;
document.write(`Percentage of 5 % 3 = <b>${percentage}</b> <br>`)

// Q3. Do the following using JS Mathematic Expressions

//a. Declare a variable.
//b. Show the value of variable in your browser like “Valueafter variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

document.write(`<h1><b>3: Increment & Decrement</b></h1><br> `)

var num;
document.write(`The value of number is <b> :${num}</b> <br>`);

var num = 5;
document.write(`Initial value <b> :${num}</b><br>`);

num++;
document.write(`Value After increment <b> :${num}</b><br>`);

num +=7;
document.write(`Value After aditional <b> :${num}</b><br>`);

num --;
document.write(`Value After decrement <b> :${num}</b><br>`);

num %=3;
document.write(`This reminder is <b> :${num}</b><br>`);

// Q4. Cost of one movie ticket is 600 PKR. Write a script to
// store
document.write(`<h1>4: Ticket</h1>  `)

var ticket = 600;
var ticket1 = 5;
ticket2 ="PKR"
var total = 600 * 5 +ticket2 ;
document.write(`Total cost buy 5 ticket to a movie in ${total} <br> <hr>`);

// Q5. Write a script to display multiplication table of any
// number in your browser. E.g

// var userInput = +prompt("Enter a number")
// for(var i = 1; i <= 10; i++){
//   document.write(`${userInput} X${i} = <b>${userInput * i}</b> <br>`)
// }
// document.write(`Q5: Table <br>`)
var table = prompt("Enter number")
document.write(`<h1>5: Table of <b> ${table} </b> <br> </h1> <br>`)
for(var a = 1; a <= 10;  a++){
    document.write(`${table} x ${a} = <b>${table * a}</b> <br>`)
    // document.write(table + "x" + a +"=" +"<b>" +(table*a)+"</b>" +"<br>")
};

// Q6 The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
document.write(`<h1>6:The Temperature Converter</h1>`)
var Temperature = 25;
var Temperature1 = (Temperature + 9 / 5 )+ 32;
document.write(`<b>${Temperature}</b> °C is <b> ${Temperature1}</b> °F <br>`)
var Temperature2 = 70;
var Temperature3 = (Temperature2 - 32) *5 /9;
document.write(`<b> ${Temperature2}</b> °F is <b> ${Temperature3}</b> °C <br>`)


//price item 1
var priceitem1 = 650;

//price item 2
var priceitem2 = 100;

//order quantiti item 1
var quantiti1 = 3;

//order quantiti item 2
var quantiti2 = 7;

//shopping charges
var shippingch = 100;

var total = priceitem1*quantiti1 + priceitem2*quantiti2 + shippingch;

document.write(`<h1><b>7:</b>Shopping Cart</h1><br>`)    
document.write(`Price of item 1 is <b>:${priceitem1}</b><br>`)
document.write(`Quantity of item 1 is <b>:${quantiti1}</b><br>`)
document.write(`Price of item 2 is <b>:${priceitem2}</b><br>`)
document.write(`Quantity of item 2 is <b>:${quantiti2}</b><br>`)
document.write(`Shipping Chargers is <b>:${shippingch}</b><br><br>`)
document.write(`Total cost of your order is <b>:${total}</b><br>`)

// Q8:Store total marks & marks obtained by a student in 2
//variables. Compute the percentage & show the result in
//your browser
var totalmarks = 980;
var obtainedmarks = 804;
var percentage = obtainedmarks / totalmarks * 100;
document.write("<h1>8: Marks Sheet</h1> <br>");
document.write(`Total Marks <b>:${totalmarks}</b> <br>`)
document.write(`Obatain Marks <b>:${obtainedmarks}</b> <br>`)
document.write(`Percentage <b>:${percentage}%</b> <br> <br>`)

var usdollar = 104.80;
var sudirial = 28;

var totalcrency = 10 * usdollar + 25 * sudirial;
document.write(`<h1> <b>9:</b> Currency in PKR</h1>`)
document.write(`Total Currency in PKR <b>:${totalcrency}</b> <br><br>`)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var nem = 10
var nem1 = (nem + 5) * 10 / 2;
document.write(`10:The final result ${nem1}`)

// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentyear = 2024;
var birthyear = 2007;
var age1 = currentyear - birthyear;
var age2 = age1 -1;
// var age2 =
document.write(`<h1>10: Age Calculator</h1> <br>`)
document.write(`Current Year :${currentyear}<br>`)
document.write(`Birth Year :${birthyear}<br>`)
document.write(`Your Age : ${age1} or ${age2}`)

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var rediascircle = 20;
var circumference = 2 * 3.142 * rediascircle;
// alert(circumference)
var areofcircle = 3.142 * (rediascircle*rediascircle);
document.write(`<h1>11: The Geomatrizer </h1>  <br> Radius of a circle <b>:${rediascircle}</b> <br> The Circumference Of Circle is <b>${circumference}</b> <br>`);
document.write(`The Area is <b>${areofcircle}</b>`);

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var snack = "Choclate Chip";
var currentage = 16;
var maxcimumage = 65;
var snackperday = 2;

var totalamount = (maxcimumage - currentage) * 365 * snackperday;
document.write(`<h1>12: The Lifetime Supply Calculator </h1> <br>`);
document.write(`Favorite Snack : <b> ${snack} </b> <br>`);
document.write(`Current Age : <b>${currentage}</b> <br>`);
document.write(`Estimated Maximum Age : <b> ${maxcimumage} </b> <br>`);
document.write(`Amount Of Snack Per Day : <b> ${snackperday} </b> <br>`);
document.write(`You will need <b>${totalamount} ${snack}</b> to last you until the reach old age of <b>${maxAge}</b> <hr>`);










