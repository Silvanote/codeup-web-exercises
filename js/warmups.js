"use strict"
// // Fizzbuzz warmup. FizzBuzz: write a program that prints the numbers from 1 to 100.  But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz".  For numbers which are multiples of both three and fix print "fizzbuzz."
// // My work
// // let i == "FizzBuzz";
// // let i = Math.random(<100);
// // for (let i = 0; i < 50 * ; i++)
// //     if i == % 3 && 5{
// //     }
// //     let i == "Fizz"
// //     if i % 3 == 0{
// //     } let i == "Buzz"
// //     if i % == 5{
// //         return == i() if !== ;
// // }
// //
// // true.console.log("Yay! I completed the warm up!")
// //
// // // actual correct way
// function fizzBuzz(limit) {
//     if (limit === undefined) {
//         limit = 100
//     }
//     for (let i = 1; i <= limit; i++){
//         if (i % 15 === 0) {//i % 3 === && i % 5 === 0
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log"Fizz");
//         }else if (i % 5 === 0) {
//             console.log("Buzz");
//         }else {
//             console.log(i)
//             }
//     }
// }
//     fizzBuzz();
//
// "use strict"
// // 27 April
// // Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together.
//
// // Ex: allFirstLetters(["dog", "cat", "frog", "bat"]) --> "dcfb";
// //
// // let animals = "";
// // function allFirstLetters(array){
// //     for(let list of array){
// //         animals = animals + list [0];
// //     }
// //  return animals
// // }
// // let animalList = ["dog", "cat", "frog", "bat", "tiger"]
// // console.log(allFirstLetters(animalList));
// //
// let animals= {
//     w: "dog",
//     x: "cat",
//     y: "frog",
//     z: "bat"};
//
// function animalList(){
//     return [animals.w[0], animals.x[0], animals.y[0],animals.z[0]];
// };
// console.log(animalList())
//
// //28 april
// "use strict"
//
// // Write a function that takes in a string and returns that string in alphabetical order.
// //: alphabetize ("codeup") --> "cdeopu"
//
// function alphabetize(x){
//     return (x).sort();
// }
// console.log(alphabetize(codeup()))
//
// // ACTUAL ANSWER
// // function alphabetize (str){
// // let strArray = str.split("");
// // console.log(strArray)
// // let sortedArray = strArray.sort();
// // console.log(sortedArray);
// // return sortedArray.join("");
//
//
// //console.log(alphabetize("codeup"));
//
// // ANOTHER EXAMPLE
// // function alphabetize (str){
// // return str.split("").sort().join("");
// //}
// May 2
// Write a function that takes in a array of numbers and returns the sum of all elements.
// function sumitup[x,y,z]{
//     let x = "Number";
//     let y = "Number";
//     let z = "Number";
//     return sumitup[(x+y+z)];
// }
// //Actual answer:
// funtions sumsit
// function sumAll(input){
//     var sum = 0;
//     input.forEach(function(element) {
//         sum += element;
//     }); return sum;
// }
//Another answer:
// function sumOfElements(arr) {
//     let bucket = 0
//     for (let el of arr) {
//         bucket += el
//     }
//     return bucket;
// }
// console.log(sumOfElements(1,2,3,4,5));

// May 3 Warm up
// Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.
//
//     Examples...

// let product1 = {
//     name: 'Hammer',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }
// let product2 = {
//     name: 'Computer',
//     priceInCents: 40000,
//     description: 'It is a computer.',
//     inventory: 33000
// }
// let product3 = {
//     name: 'Ruler',
//     priceInCents: 1000,
//     description: 'It is a ruler.',
//     inventory: 2200
// }
// function returnProductEssentialDetails(product) {
//     return {
//         name: product.name,
//         priceInCents: product.priceInCents
//     }
//
//     returnProductEssentialDetails(product1); // returns...
    /*
        {
            name: 'Hammar',
            priceInCents: 400
        }
    */
    // returnProductEssentialDetails(product2); // returns...
    /*
        {
            name: 'Computer',
            priceInCents: 40000
        }
    */
    //returnProductEssentialDetails(product3); // returns...
    /*
        {
            name: 'Ruler',
            priceInCents: 1000
        }
    */
//

// BONUS (if time permits)
//
// Create a function, returnAllProductsEssentialDetails, that takes in an array of product objects and returns an array of product objects containing only the essential details of the product name and price in cents.
//BONUS Answer
//     let products = [product1, product2, product3];
//
//     function returnAllProductEssentialDetails(products) {
//         let productsOutput = [];
//         products.forEach(function (product) {
//             products.push(returnProductEssentialDetails(product));
//         });
//     }
//
//     return productsOutput;
// }
// console.log(returnProductEssentialDetails(products))

//9 May 22
// Write a function that will accept an array of objects and return the tallest object from the array.
//
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function tallestobj(obj){
//
// // function tallestobj(obj){
// //     let tallest = {heightInMM: 0};
// //     for(let hamster of obj) {
// //         if (hamster.heightInMM > tallest.heightInMM) {
// //             tallest = hamster
// //         }
// //     }
// //     return tallest
// }
// function tallestHampster(arr){
//     let tallest = arr[0];
//     for(let i=1; i < arr.length; i++){
//         if(arr[i].heightInMM > tallest.height.InMM){
//             tallest = arr[i];
//         }
//     }
//     return tallest;
// }
//
// console.log(tallestobj(hamsters));

// 10 May
// Write a function that will accept an array of objects and return the object from the array that is the most colorful. Test array in Slack.
// function mostColorfulFor(hamsters){
// let mostColors = hamsters[0];
// for (let i = 1; i<hamsters.length; x++){
//     if(hamsters[x].fur.length > mostColors.fur.length){
//         mostColors = hamsters[x];
//     }
// }
// return mostColors
// }
//
// //Solution from  10 May:
// function mostColorful(hamsters){
//     let mostColors={colors: []};
//     for(let hamster of hamsters){
//         if (hamster.fur.length > mostColors.fur.length){
//             mostColors = hamster;
//         }
//     }
//     return mostColors;
// }
// console.log(mostColorful(hamsters));

//May 11
// Write a function that will accept a string.  It should return an object with the following properties: string, size, contains lettersLetterFromRSTLN, and is one word.
//
// const objectsExer = [
//     {
//         string: "tacocat",
//         size: 7,
//         containsLetterFromRSTLNE: true,
//         isOneWord: true;
//     },{
//         string: "John Jacob",
//         size: 10,
//         containsLetterFromRSTLNE: false,
//         isOneWord: false
//     },
// }

function pullLetters (accepts){
    let obj = {};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = somenumbers
}

//Actual solution

function makeObjectFromString(str){
    const obj = {};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = str.toLocaleString();
    if (lc.inludes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n")|| lc.includes("e")){
        obj.containsLetterFromRSTLNE = true;
    }else {
    obj.containsLetterFromRSTLNE = false;
    }
    return obj;
}
console.log(makeObjectFromString("tacocat"));
    console.log(makeObjectFromString("John Jacob"));
// June 7

let URL = "https://quotes.rest/qod"

fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
    .then(res => res.json())
    .then(results => results[0])
    .then(firstEvent => console.log(firstEvent))

