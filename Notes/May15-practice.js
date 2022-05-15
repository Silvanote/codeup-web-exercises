"use strict"
//Practice more loops


function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0){
            sum += arr[i];
        }
    }
}

function randomPositiveEvenNumber(){
    let randomnumber = Math.ceil(Math.random() * 100) + 10;
    if (randomnumber % 2 === 0) {
        return randomPositiveNumber;
    }
    return randomNumber;
}
// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if (randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * -100) - 10;
    if (randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}