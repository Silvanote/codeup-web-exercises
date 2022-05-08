"use strict";

(function(){
    console.log("Bonjour Pierre");
    // make two variables, one for string and one for number
    console.log("example");

   let x = "Juan"
   let y = 555
   let z = false
    //make a function that tells you the input it is
    function makesense (input){
       return typeof input
    }
    console.log(makesense(x));
    console.log(makesense(y));
    console.log(makesense(z));
    //make a function that squares a number

    function square(num){
        return num * num;
    }
console.log(square(5));
    console.log(square(25));

// write a function that concatenates to a strings
    function getTogether(job){
        return job + "name of a job" + " " + x;
    }
console.log(getTogether("job"));

    //write a boolean
    function boo (zen){
        if (zen === 10){
            return "yes it is 10"
        }else{
            return false
        }
    }

    console.log(boo(10));
    console.log(boo(5));
    console.log(boo("word"));

    //make a function that tells you how long the string is
    function getTheLength(howlong){
        return howlong.length
    }

    console.log(getTheLength("wording"))
    console.log(getTheLength(x))
    console.log(getTheLength(z)) //because z is not a word aka string

//ARRAYS
    const nums = ["0", "11", "222", "33", "44", "55"];

// write a function that tells you the length of the array
    function telllong(input){
        return input.length
    }
console.log(telllong(nums));
    console.log(telllong(["kekels", 3993, 6202]));

    // GET A NUMBER FROM INPUT AND PARSEFLOAT
//USE REFERENCE
    //write a function to return data types but have to check if string works that pulls the number from it
    // is it a number
    function isNumber(input) {
        if (!isNaN(parseFloat(input))) {
            return true;
        } else {
            return false;
        }
    }
    console.log(isNumber(5));
    console.log(isNumber("5x"));
    console.log(isNumber("x5"));
//PULLS NUMBER FOR TWO VARIABLES AND UTULIZES AS NUMBER EVEN IF INPUT WASN'T AN ACTUAL NUMBER (I.E. "455", 456, "45EE", E44 = NAN)
    function addTwoNumber(x,y){
        if(isNumber(x) && isNumber(y)){
            return parseFloat(x) + parseFloat(y);
        }
    }
console.log(addTwoNumber(3, 6));
console.log(addTwoNumber("d11", 6));
console.log(addTwoNumber("9", "10"));


//ARRAY
    //write a function that tells you if the entire array is all data type of numbers
    const example1 = [5656, 9393, 20202];
    const example2 = [true, false, 2390, "false"];
    const example3 = ["4949ex", "2323", "3404"];

    //for loop example:
    function practicearray(yourarray) {
        for (let i=0; i < yourarray.length; i++) {
            if (isNumber(yourarray[i]) == false) {
                return false;
            }
        }
        return true;
    }
    console.log(practicearray(example1));
    console.log(practicearray(example2));
    console.log(practicearray(example3));

    function addtothearray(input){
        example1.push(input);
    }

    addtothearray(5);

    console.log(example1);

    function removelastelement(){
        example2.pop();
    }
    removelastelement();
    removelastelement();

    console.log(example2);

    //OBJECT
    //Write a function that

})();
