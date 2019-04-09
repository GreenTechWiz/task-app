


// Creates a pop up window
// alert("Hello!");

//Console.logging useful for debuging, NOT for communicating to the user
//Equivalent to puts or p in Ruby
//Javascript dosnt interact with termial, why we use the .log function (method) to troubleshoot
//console.log function is processed by Javascript be fore it's logged to the console
// console.log("Hello World");

//Implicit converstaion to types is diffrent
// console.log(2 + 2);
// console.log(2 * 2);
// console.log("2" + 2);

//Booleans are the same with some
// console.log(true);
// console.log(false);

//In Javascript, 0 and "" (empty string) are considered false values, wheas in Ruby, they are true
// console.log(!0);


//Strict equality operator-- Uses three equals to make vaules completly equal
// console.log(2 === 2);   //True
// console.log(2 === "2");   //False

//The less strict equaltiy operator (==) converts the values to the same type
// console.log(2 === "2");
// console.log(false == "" )   

//When we first create a variable, we must us the 'var' or 'let' keyword followed by the name of the varible
var myNumber = 5;

//When we want to reassign a varibale, we dont need the keyword 'var' or 'let'
myNumber = 3;

if (myNumber === 5) {
  console.log("It's five!");
} else if (myNumber === 4) {
  console.log("It's a four")
} else {
  console.log("It's not five");
}


//Functions can be hoisted typically, which means they can be called from anywhere in the file, even before the function is created
sayHi();

//Funcitions need the argument paraenthes
function sayHi() {
  console.log("Hi");
}

//Still need argument paraenthes; Tells the browers it's a function
sayHi();

//We have to be explicit if we want to return something in javascript; it donst just return the last line like ruby
function numberMultiplier(firstNum, secondNum) {
  return firstNum * secondNum;
}

console.log(numberMultiplier(3, 5));

//Arrays work the same way
var myArray = [56, 12, 27, 4, 3, 10];
console.log(myArray)

//Length is a property of JS, instead of a method like in Ruby
console.log(myArray.length);

//JS calls indexes with brackets, just like ruby
console.log(myArray[2]);

myArray.push(15);   //Push adds a value to the end of array
console.log(myArray);

myArray.pop();   //Pop removes the last value
console.log(myArray);

//Shift is the opposite of pop, removing the value at the front of the array
myArray.shift();
console.log(myArray);

//Unshift is the opposite of push in that it adds a value to the front of the array
myArray.unshift(56);
console.log(myArray);

//While loops are more syntax heavy
// counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   // counter++ is the same as counter = counter + 1
//   counter++;
// }


//For Loops:
//Starts with for Keyword
//First clause runs beofer the loop ever. runs-- typically, this is wheer we etablish our 'counter' variable, often called i
//Second clause is a dondition al thar runs each time the loop is about to run-- this is the equivalent of the while loop condition
//Third clause runs after each loop throught-- typically, this is where we increment 'i'
for (var i = 0; i <= 10; i++) {
  console.log(i)
}

myArray = [56, 12, 27, 4, 3, 10]
for (var i = 0; i < myArray.length; i++) {
 console.log(myArray[i]);
}

//Objects (hashes in Ruby) look pretty muc the same, but the 'keys' (in this case, firstName and lastName) are not sybmbols.
var person = {firstName: "Mitch", lastName: "Fischer"}
console.log(person);

//Object values can be accessed using braket notation
console.log(person["firstName"]);

//AND do notation!
console.log(person.lastName);

//We can add/reassign new key-value paris by using dot notation OR bracket notation
person.age = 24;
person["age"] = 25;
console.log(person);
console.log(person);