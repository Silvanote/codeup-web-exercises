"use strict";

// Practice practice
// exercise 1
// on the line below, create a variable named onMarsRightNow and assign it to the boolean value of false
let onMarsRightNow = false

// exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry
let fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]

//exercise 3
// Create a variable named vegetables and assign it an array of fruits containing the following vegetable name as strings:
// eggplant, broccoli, carrot, cauliflower and zucchini
let vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"]

//exercise 4
// create a variable named numbers and assign it an array of numbers, 1-10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//exercise 5
//add string "tomato" tot he end of the fruit array
fruits.push('tomato')

//exercise 6
//add the string 'tomato onto the end of the vegetables array
//recommend using the built-in JS operation to add to an array
vegetables.push("tomato");

//exercise 7
//given the array of numbers defined below, reverse the array that you created below
let somenumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
somenumbers.reverse();

//exercise 8
//sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();

//exercise 9
// write the code necessary to sort the fruits in reverse alphabetical order
fruits.reverse(fruits.sort())

//exercise 10
// write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above. Assign the result to a variable named fruitsAndVeggies. *hint* the search engine search here would be "how to combine two arrays in js", for example.
let fruitsAndVeggies = fruits.concat(vegetables);

//this function generates a random number that is both positive and even
function randomPositiveEvenNumber(){
    let randomnumber = Math.ceil(Math.random() * 100) + 10;
    if (randomnumber % 2 === 0) {
        return randomPositiveNumber;
    }
    return randomNumber;
    }
//this function generates a random number that is both positive and negative and even
function randomNegativeEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * -100) - 10;
    if (randomNumber % 2 === 0) {
    return randomNumber;
    }
return randomNegativeEvenNumber()
}
// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x){
    return x + 2;
}
// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function plusone(x){
    return x + 1;
}

// Exercise 12
//Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
function isPositive(i){
    if (i > 0){
        return true;
    }
    return false;
}

// Exercise 13
// Write a function definition named isNegative that takes in a number and return true or False if that number is negative.
function isNegative(i){
    if (i > 0){
        return true;
    }
    return false
}
// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd (i){
    if (i % 2 !== 0){
        return true;
    }
    return false;
}

//Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(i){
    if (i % 2 === 0){
        return true;
    }
    return false;
}

// Exercise 16
// Write a function definition identity that takes in any input and returns input.  Don't overthink this one.
function identity(input) {
    if (input === input) {
        return input;
    }
}

//Exercise 17
// Write a function definition named isPositiveOdd that takes a number and returns true or false if the value is both greater than zero and odd
function isPositiveOdd (i){
    if (i % 2 !== 0 && i > 0) {
        return true;
    }
    return false;
}

//Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even.
function isPositiveEven (i) {
    if (i % 2 === 0 && i > 0) {
        return true;
    }
    return false;
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is less than zero and odd.
function isNegativeOdd (i){
    if (i % 2 !== 0 && i < 0){
        return true;
    }
    return false;
}

// Exercise 20
//