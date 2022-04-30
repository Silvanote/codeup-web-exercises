"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//problem 1
//let color = prompt("What is your favorite color?") .toLowerCase().trim();

function analyzeColor(color) {
    if (color === "blue"){
        return("blue is the color of the sky");
    }else if (color === "red") {
        return ("Strawberries are red");
    } else {
        return ("I don't know anything about " + color);
    }
}
analyzeColor(prompt("blue"))
analyzeColor(prompt(red))
analyzeColor(prompt(purple))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// problem #2
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));
/**
 *
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// problem #3

// The code above wasn't accomplished correctly.

//   let color = prompt("What is your favorite color?") .toLowerCase().trim();
//
// switch (color) {
//     case "blue":
//         console.log("blue is the color of the sky");
//         break;
//     case "red":
//         console.log("strawberries are red");
//         break;
//     default:
//         console.log("I don't know anything about " + color);
//     break;
//
// }

//problem 4
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

console.log(analyzeColor(prompt("enter color:")));

/* ########################################################################## */

//problem 5
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, total){
//     switch (luckyNumber){
//         case 0:
//             return total * .10;
//         case 1:
//             return total * .25;
//         case 2:
//             return total * .35;
//         case 3:
//             return total * .50
//         case 4:
//             return total *  .100
//         default:
//             return total;
//     }
// }
//
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1,100));
// console.log(calculateTotal(2, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//
// let luckyNumber = Math.floor(Math.random() * 6);
// let total = prompt("What was your bill total?")
// alert ("Your lucky number was: " +luckyNumber + "\nYour total discount was: & " + total.toFixed(2))"\nYour final total: $" + calculateTotal(luckyNumber, total).toFixed(2));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function numberGame(){
    let userVal = parseFloat(prompt("Please give me a number("");
    if (isNan(userVal))
        alert("That's not a number");
    }else{
        alert("Good choice" + userVal + evenOrOdd(userVal) + "number.");
        alert("Good choice" + userVal + plus100(userval));
        alert("Good choice" + userVal + positiveorNegative((userVal));

    }

function plus100(num) {
    return num + 100;
}
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else if (num % 2 !== 0) {
        return "odd";
    } else (num === 0){
        return "zero is not even or odd"
    }
}
}

function positiveorNegative(num) {
    if (num === 0) {
        return "zero";
    } else if (num > 0) {
        return "positive"
    } else {
        return "negative"
    }
}