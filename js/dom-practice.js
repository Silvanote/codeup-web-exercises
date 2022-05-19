
// TODO: Prompt the user to enter a color. Select the first div with the class of "question", and change the font color to the users input.
let choice = prompt("Pleast enter a color.");

// let div1 = document.getElementsByClassName("question")[0];
// console.log(document.getElementsByClassName("question"));
//
// div1.style.color = choice;

let divider = document.getElementsByClassName

("question");// question came from the html class

for (let i = 0; i < divider.length; i++) {
    if (i === 0) {
        divider[i].style.color = choice;//the answer is coming from using the array and then changing with css/bootstrap properties
    }
}
//tried making for( divide of dividers) loop but didn't iterate properly

//     DOM Practice Question #1
//     Create an HTML file called dom-practice.html in codeup-web-exercises repos.
// Put a text input on an html page with id of "color"
// Put a button on the page with id of "changeColor"
// Use an Event listener to trigger when the button is clicked.
//         Use the value to change the background-color of the page to match the user's input value.
//         example of input: "#00000", "black", "#FF00FF"

document.getElementById("changeColor") //change color came from the ID(which can only be used once unless you bucket the object index[i].
.addEventListener("click", function () {
    let newColor = document.getElementById("color").value;
    document["body"],["style"],["backgroundColor"] = newColor;
});
//should i use commas between arrays???? Ask question on comma and if I have to use brackets or can use objects and pull information?