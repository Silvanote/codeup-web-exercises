// "use strict";
// // Follow directions to get here.
//MY LOOP


function showMuliplicationTable(variable) {
    for (let i = 1; i < 10; i++) {
        let mathnum = i * variable;
        let mathtable = variable + "times" + i + "=" + mathnum

        console.log(mathtable);
    }
//no need for a return since for loop.  If else statements need returns.
}
showMuliplicationTable(8);

//#3 use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.  for example: 123 is odd, 80 is even.// // //for oddandEven
function numberOddOrEven(){
    for(let i = 1; i < 9 ; i++){
        let newNumber = Math.ceil(Math.random() *  200 + 19);
        if (newNumber % 2 === 0){
            console.log("You made a Random Number " + newNumber + " because it is dividable by 2.");
        }else{
            console.log("Your number is " + newNumber + " not dividable by 2.");
        }
    }
}
//initially kept loopping becuase I put i > 9...browser kept locking up

numberOddOrEven();

//4. Number pyramid();

function numberpyramid(){
    for (let i = 1; i < 10; i++){
        let x = "";
        for (let number=1; number<=i; number++){
            x = x + number;
        }
        console.log(x);
    }
}
numberpyramid();

// 5. Create a loop that uses console.log to create the output shown below.
// Go opposite for this on the for loop > < signs and start at highest number.
function fiveDownToZero (x) {
    for (let i = 100; i >= 5; i-=5) {
        console.log(i);
    }
}
fiveDownToZero();

