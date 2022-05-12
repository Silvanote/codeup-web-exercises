"use strict"

//
//
function ask(askforNumber) {
    do {
        let askForNumber = prompt("Please give me a number between 1 and 50.");
    if(askForNumber <=50 && askForNumber % 2 !== 0 ){
        break;
    }
}
    while(true);
for (let i = 1; i<=50; i += 2) {
    if (i === askForNumber) {
        console.log("Got the number" + askForNumber);
        continue;
    }
    console.log(i);
}
ask();}

// (function () {
//     let userNum;
//
//     while (true) {
//         userNum = parseFloat(prompt("Give me an odd number between 1 and 50, please."));
//         if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
//             break;
//         }
//     }
//
//     for(let j = 1; j <= 50; j += 2) {
//         if (j === userNum) {
//             console.log("WHOOP! Skipping " + userNum);
//             continue;
//         }
//         console.log(j);
//     }
// })();