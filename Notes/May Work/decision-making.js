"use strict";

//math.floor means going down 87.99 = 87
//math.ciel does the opposite and rounds to next whole integer
//math.random gives you a number between 0 and 1 = .000001 - 0.99999

// Math.floor(Math.random() * 5)
// gives me numbers between 0.000001 and 4.99999999
// //if you want it 1 or more, concatenate + 1 at the end

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = "You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}."

//Boolean logic by understanding Comparison Operations
//Know unicode values come into play when dealing with comparison operators

//Example of loop with talble and row

    let i=1;
    let output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";

    {
        output = output + "<tr>";
        while(j<=cols)
        {
            output = output + "<td>" + i*j + "</td>";
            i = i+1;
        }
        output = output + "</tr>";
        i = 1;
    }
    output = output + "</table>";{
}