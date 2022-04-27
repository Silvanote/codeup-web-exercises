"use strict"

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