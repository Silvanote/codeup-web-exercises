"use strict";

let myString = "HelloWorld";
// let splittedString = stringToAlphabetize.split("")
// splittedString.sort()
//
// let joinedStr = sortedStr.join("")
//
// console.log(splittedString)

// stringToAlphabetize.split("");
//
// console.log(stringToAlphabetize);


function splitString (str) {
  return str.split('').sort().join(',')



}

console.log(splitString(myString));