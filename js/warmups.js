"use strict"
// Fizzbuzz warmup. FizzBuzz: write a program that prints the numbers from 1 to 100.  But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz".  For numbers which are multiples of both three and fix print "fizzbuzz."
// My work
// let i == "FizzBuzz";
// let i = Math.random(<100);
// for (let i = 0; i < 50 * ; i++)
//     if i == % 3 && 5{
//     }
//     let i == "Fizz"
//     if i % 3 == 0{
//     } let i == "Buzz"
//     if i % == 5{
//         return == i() if !== ;
// }
//
// true.console.log("Yay! I completed the warm up!")
//
// // actual correct way
function fizzBuzz(limit) {
    if (limit === undefined) {
        limit = 100
    }
    for (let i = 1; i <= limit; i++){
        if (i % 15 === 0) {//i % 3 === && i % 5 === 0
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log"Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i)
            }
    }
}
    fizzBuzz();

"use strict"
// 27 April
// Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together.

// Ex: allFirstLetters(["dog", "cat", "frog", "bat"]) --> "dcfb";
//
// let animals = "";
// function allFirstLetters(array){
//     for(let list of array){
//         animals = animals + list [0];
//     }
//  return animals
// }
// let animalList = ["dog", "cat", "frog", "bat", "tiger"]
// console.log(allFirstLetters(animalList));
//
let animals= {
    w: "dog",
    x: "cat",
    y: "frog",
    z: "bat"};

function animalList(){
    return [animals.w[0], animals.x[0], animals.y[0],animals.z[0]];
};
console.log(animalList())

//28 april
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
