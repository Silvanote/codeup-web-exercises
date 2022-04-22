"use strict"
// Fizzbuzz warmup. FizzBuzz: write a program that prints the numbers from 1 to 100.  But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz".  For numbers which are multiples of both three and fix print "fizzbuzz."
// My work
// let i == "FizzBuzz";
// let i = Math.random(<100);
// for (let i = 0; i < 50 * ; i++)
//     if i == % 3 && 5{
//     }
//     let i == "Fizz"
//     if i % 3 == 0{
//     } let i == "Buzz"
//     if i % == 5{
//         return == i() if !== ;
// }
//
// true.console.log("Yay! I completed the warm up!")
//
// // actual correct way
function fizzBuzz(limit) {
    if (limit === undefined) {
        limit = 100
    }
    for (let i = 1; i <= limit; i++){
        if (i % 15 === 0) {//i % 3 === && i % 5 === 0
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log"Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i)
            }
    }
}
    fizzBuzz();