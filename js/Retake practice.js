"use strict"

//practice 29 and 30 april
function analyzeColor(color){
    if(color == "blue"){
        return "Blue is the color of the sky."
    }else if(color == "red") {
        return "Red means something is hot."
    }else if(color == "green"){
        return "Money is green.";
    }else{
        return "I don't know anything about that color."
    }
}
console.log(analyzeColor("blue"))
console.log(analyzeColor("green"))
console.log(analyzeColor("azul"))

for(let i = 0; i < 5; i++){
    console.log("loop" + i);
    if (i == 3) break;
}
for(let i = 9; i > 0; i--){
    console.log("loop" + i);
}
let names = ["juan", "damon", "kevin", "dalton"];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
function parseNumber(input) {
    if (!isNaN(parseFloat(input))) {
        return parseFloat(input);
    } else
        return false;
}
console.log(parseNumber(5));
console.log(parseNumber("7"));
console.log(parseNumber("five"));


    function isANumber(value) {
        return !isNaN(parseFloat(value));
    }

    console.log(isANumber("xx"))
    console.log(isANumber(17));

    function increment(num) {
        if (isANumber(num)) {
            return parseNumber(num) + 1;
        } else {
            return false;
        }
    }

    console.log(increment(6));
    console.log(increment('8lkjhhjkhjk7'));

