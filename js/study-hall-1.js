// Define a function named isString that takes in a value and returns a boolean if the argument provided is a string or not.

function isString(y){
    return typeof y == "string"
}

console.log(isString(5))
console.log(isString("yes"))
console.log(isString("No"))


// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.
function isNotString(x){
    return typeof x !== "string";
}

console.log(isNotString(10))
console.log(isNotString("five"))

// Define a function named isNotEmptyString that takes in a value and returns a boolean if the argument provided is an empty string or not.
function isNotEmptyString( x) {
    return (x == "" && x.length > 0);
}
console.log(isNotEmptyString(""))
console.log(isNotEmptyString("two"))
console.log(isNotString(27))


// Define a function named isANumber that takes in a value and returns true if the input is a number.
function isANumber(input){
    return typeof input === "number";
}

console.log(isANumber(2));
console.log(isANumber("yes"));

// Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
function isNumeric(x){
    return (!isNaN(parseFloat(x)));
}
console.log(isNumeric(17))
console.log(isNumeric(true));
console.log(isNumeric("5"));

// Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.
function isZero(x){
//     let y = parseInt(x);
//     return (y == 10);
// }
//DEF DID NOT WORK
return (x % 10 == 0)
}
console.log(isZero(10))
console.log(isZero(30))


// Define a function named isMoreThanTen that accepts a number and returns true or false based on whether the input is more than ten.
function isMoreThanTen(num){
    return num > 10;
}
console.log(isMoreThanTen(22))
console.log(isMoreThanTen(5))


// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.
// function isPositive(x){
function isNegative(x){
//     var x = (parseFloat(x));
//     return ((x < 0) && (typeof x == "number"));
// }
    if ((x > 0) && (typeof x == "number")) {
        return true
    }else{
    return false
    }
}

//Trevor stated my first answer was undefined because I needed to tell the computer that other option is false.  Even if True is only option initially, I had to specify it is a boolean by giving false options as well.
console.log(isNegative(-2)); //false
console.log(isNegative(12)); //true