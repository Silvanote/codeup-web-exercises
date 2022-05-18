"use strict";

// function something(){
//     return parseFloat(prompt("Lazy Sunday","What did you do today?"));
// }
//
// console.log(something);
//
// something();
//
// let name = "Codeup";
//
// let test = "Hello Codeup";
//
// test<enter>
// alert("Testing alert text.");

// let confirmed = confirm("Are you sure you want to do XYZ?");
// console.log(confirmed);
//
// let userInput = prompt("Please type something.")
// console.log("The user entered: " + userInput);
//
// function myAnswer(value){
//     return typeof value == "boolean";
// }
// let onMarsRightNow = false;
//
// let fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];
//
// let vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"]
//
// fruits.push("tomato")
//
// function generates a random number both positive and even
function randomPositiveEvenNumber(){
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if (randomNumber % 2 !== 0){
        return randomPositiveEvenNumber();
}
console.log(randomNumber);
}
 // ask about exercise 52-54 on examples
function getString (value){
    return typeof value === "string"
}
function notgetString(value{
    return typeof value !== "string"
}

function isANumber(num){
    return typeof num === "number"
}

function incrementing(num){
  if(!isNaN(parseNumber(num))){
      return ++num;
  }   else {
      return false
  }

}












