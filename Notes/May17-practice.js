"use strict"

//check for string
function checkForString(array1) {
    for (let i = 0; i < array1.length; i++) {
        //for(let i = array1.length-1; i>=0; i--)// i++ = i + i+1
        if (typeof array1[i] === "string") {
        } else {
            return false;
        }
    }
    return true;
}

// if (checkForString(strArr) === true) {
//     console.log("hi");
// }

let strArr = ["wer", 'ee', "ewr"];
// ['werwer', 'eeee', 'ewrewr']
let numArr = [2, 4, 5, 6];

function doubleTheLettersinEachString(strArray) {
    let strArray2 = [];
    for (let i = 0; i < strArray.length; i++) {
    let str = "" +strArray[i] + strArray[i];
    strArray2.push(str);
    }
    return strArray2;
}
console.log(doubleTheLettersinEachString(strArr));

let numArr = [2, 4, 5, 6];

function doubleTheGivenLetters(numArr){

}


