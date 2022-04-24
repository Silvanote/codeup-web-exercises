"use strict";

//Immediately Invoked Function Expression IIFE

(function() {


//add function
    function add(x, y) {
        return x + y;
    }

    console.log(add(7, 8));
//create remainder function for two input; dividend divisor
//modulus = %

    function modulus(x, y) {
        return x % y
    }

    console.log(modulus(12, 9));
    console.log(modulus(1000, 7));

    //function 4 and 6
    function keepaddingup(x, y) {
        let sum = 0;
        for (let i = 0; i < y; i++) {
            sum = sum + x;
        }
        return sum;
    }

    console.log(keepaddingup(4, 6));

    let myName = "Juan";

    function language(name) {
        return "Hello " + name;
    }

    console.log(language(myName));
    // write a function named squareroot that returns the square root of the input

    function squareroot(input){
        input = Math.sqrt(input);
        return input;
    }
    console.log(squareroot(16))

// Arrays: know your key words
// TODO: Create a function that will replace every other letter of a string with a "Z".
    function replaceWithZ(str) {
        let text = "";
        let i = 0;
        for (i = 0; i < str.length; i++) {
            if (i % 2 == 1) {
                text = text + "Z";
            } else {
                text = text + str[i];
            }
        }
        return text;
    }
    console.log(replaceWithZ("JuanSilva"));



})()

