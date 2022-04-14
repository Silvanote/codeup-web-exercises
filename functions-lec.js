"use strict"
// function definition
function firstFunction(name) {
    return "Hello" + name;
}

//console.log(firstFunction("Juan"));
//console.log(firstFunction("Diane"));

// Parsing my stuff in a function
//function parseMyStuff(input) {
    input = parseFloat(input)
    return input;

}
let price = parseMyStuff(prompt("How much does this thing cost?"));
console.log(price);

let maybeString = "I am string"

function isString(maybeString){
    return typeof maybeString == "string";
}

console.log(isString(maybeString));
// fuction expression

const increment = function(x) {
    return x + 1;
}
// Arrow Function
const myArrowFunction = (firstName, lastName) => {
    firstName = firstName.toUppercase();
    lastName - lastName.toUppercase()
    return firstName + "" + lastName;
}

console.log(increment(5))
console.log(myArrowFunction("Juan", "Silva"))

//In an arrow function, the above function looks like:

const firstArrowFurction = (name) => "Hello" + name;


