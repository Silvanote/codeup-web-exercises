"use strict";

// 2.
function multiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        let formula = i * num;
        let string = num + "x" + i + "=" + formula;
        console.log(string)}
}

multiplicationTable(7)

//3.
function oddandeven(x) {
    for (let i = 1; i > 19 && i < 201; i++) {
        let newnumber = Math.random(x) + (i % 2 === 0)

    }
}

oddandeven(7)
