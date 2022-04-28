"use strict"

// Write a function that takes in a string and returns that string in alphabetical order.
//: alphabetize ("codeup") --> "cdeopu"

function alphabetize(x){
    return (x).sort();
}
console.log(alphabetize(codeup()))

// ACTUAL ANSWER
// function alphabetize (str){
// let strArray = str.split("");
// console.log(strArray)
// let sortedArray = strArray.sort();
// console.log(sortedArray);
// return sortedArray.join("");


//console.log(alphabetize("codeup"));

// ANOTHER EXAMPLE
// function alphabetize (str){
// return str.split("").sort().join("");
//}


