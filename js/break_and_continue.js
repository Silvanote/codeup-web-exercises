"use strict"

//
function ask() {
    do {
        let askForNumber = prompt("Please give me a number between 1 and 50.");
        if (askForNumber <= 50 && askForNumber % 2 !== 0) {
            break;
        }
    }

    while (true);
    for (let i = 1; i <= 50; i += 2) {
        if (i === askForNumber) {
            console.log("Got the number" + askForNumber);
            continue;
        }
        console.log(i);
    }
}
ask();
