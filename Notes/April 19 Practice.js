"use strict";

//1. Define a function names isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
function isTrue(truestatement) {
    return truestatement === true;
}

//2. Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
function isFalse(falsestatement){
    return falsestatement === false;
}

//3. Define a function named not that takes in any input and returns the booleans opposite of the provided input.
function not(example){
    return !example;
}

//4. Define a function named addOne that takes in a single input.  If the input is a number or a number string, return the value plus one.
function addOne(plusone){
    return parseFloat(plusone) + 1
}
//5. Define a function named isEven that takes in a single input.  If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
function isEven(num) {
    if (isNaN(parseFloat(num))) {
        return false;
    } else {
        return parseFloat(num) % 2 === 0;
    }
}
function isEven(num){
    if (isNan(parseFloat(num))) {
        return false;
    } else {
        return parseFloat(num) % 2 === 0;
    }
}
//6. Define a function named isIdentical
// Identical that takes in two input arguments. If each input is equal both in data type and in value, the return true.  If the values are not the same data type or not the same value return false.
function isIdentical(x,y){
    return (x === y);
}

//7. Define a function named isEqual that takes in tow input arguments.  If each input argument is equal only in value, then return true.  Otherwise return false.
function isEqual(x1, y1){
    return x1 == y1;
}

//8. Define a function named or that takes in two input arguments.  The output returned should be the result of an or operation in both inputs
function or(x1,y1){
    return x1 || y1;
}

//9. Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
function and(x, y){
    return x && y;
}

//10. Define a function named concat that takes in two input arguments.  If both arguments are strings, then return the concatenated result.  If two numbers are provided, then return the string concatenation of each set of numerals.
function concat(x1, y1){
    return "" + (x1) + (y1);
}