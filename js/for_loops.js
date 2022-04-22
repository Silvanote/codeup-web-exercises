// "use strict";
// // Follow directions to get here.
//
// // Multiplicationtable
// function multiplicationTable(num) {
//     for (let i = 1; i < 11; i++) {
//         let formula = i * num;
//         let string = num + "x" + i + "=" + formula;
//         console.log(string)}
// }
//
// multiplicationTable(7)
// // correct way
// //function multiplicationTable(num){
// // for(let p = 1; p < 11; p++){
// //  console.log(num + "x" + p + "=" + (num * p));
// // }
// // }
// //multiplicationTable(7)
//
//
// //for oddandEven
// function oddandeven(x) {
//     for (let i = 1; i > 19 && i < 201; i++) {
//         let newnumber = Math.random(x) + (i % 2 === 0)
//
//     }
// }
// // Correct way
// function tenRandomNumbersEvenOrOdd(){
//     for (let j = 1; j <= 10; j++){
//         let randomNum = Math.floor(Math.random() * 181) + 20
//         if (randomNum % 2 === 0) {
//             console.log("Wowie zowie!" + randomNum + "is an even number!");
//         } else {
//             console.log("Jeepers!" + randomNum + " is an even number!");
//         }
//         }
// }
// tenRandomNumbersEvenOrOdd();

//numberpyramid();
// function numberPyramid(){
//     for (let y = 1; y < 10; y++){
//         let str = "";
//         for (let x = 1; x <= y; x++){
//             str = str + y;
//         }
//         console.log(str);
//     }
// }
// numberPyramid();

//4.for loop
//oddandeven(7)
//
// //5. 5s up to 100
// for(let i = 0; i < 10, i++);
// let text = ""
// for (let x = 0; x < i; x++);
// txt = txt + i;

// console.log(txt)

//6. break and continue
// function countingDownByFive(value) {
//     for (value; value > 0; value -= 5) { // what is -=5
//         console.log(value);
//     }}
// countingDownByFive(100);

//7. break loop
//Yay! I sold them all! // If there are no more cones
//
// (function (){
//     while (true) {
//         let userNum = parseFloat(prompt("Give me an odd number between 1 and 50, please."));
//         if (userNum % 2 !== 0 && userNum >=1 && userNum <=50) {
//         break;
//         }
//     }
//     for (let j = 1; j <= 50; j+=2){
//         if let j === userNum) {
//         console.log("Whoop! Skipping" + userNum);
//         continue;
//         }
//         console.log(j);
//     }
// }

// while loop
//
//     function whileloop() {
//         let x = 1;
//         while (x < 65536) {
//             x *= 2;
//             console.log(x);
//         }
//     }
// multiplyBy2Alot();
// let i = 2;
// while (i < 65537) {
//     console.log(i);
//     i+=i;
// }
//This is how you get a random nyumber between 50 and 100
let allCones = Math.floor(Math.random() * 51) + 50;

do{
    // This expression will generate a random number between 1 and 5
    let customerOrder = Math.floor(Math.random() * 5) + 1;
    console.log("Customer orders" + customerOrder + "cone(s). We have " + allCones + "left in stock.");
    if (customerOrder > allCones) {
        console.log("Order cannot be fulfilled. NEXT!");
    } else {
        allCones -= customerOrder;
        console.log("here you go! We not have" + allCones + "left in stock.");
    }
} while (allCones > 0);

console.log("Whew! What a day. Sold all the cones.")