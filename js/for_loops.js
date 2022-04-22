"use strict";
// Follow directions to get here.

// Multiplicationtable
function multiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        let formula = i * num;
        let string = num + "x" + i + "=" + formula;
        console.log(string)}
}

multiplicationTable(7)

//for oddandEven
function oddandeven(x) {
    for (let i = 1; i > 19 && i < 201; i++) {
        let newnumber = Math.random(x) + (i % 2 === 0)

    }
}
//4.for loop
oddandeven(7)

//5. 5s up to 100
for(let i = 0; i < 10, i++);
let text = ""
for (let x = 0; x < i; x++);
txt = txt + i;

console.log(txt)

//6. break and continue

//7. while loops
//
// let inventory = Math.floor(Math.random() * 51) + 50;
// let halfSold = inventory/2;
//
// do{
//     let icecream = (Math.random() * 51) + 50;

//     if (customerBuysCandy > inventory) {
//         continue;
//     } else{
//         inventory -= customerBuysCandy;
//         console.log("Order fulfilled." + inventory + "piece(s) of candy left in stock.")
//     }
// } while (inventory > halfSold);
//
// console.log("Everything has been sold. We are done.");
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

    5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones