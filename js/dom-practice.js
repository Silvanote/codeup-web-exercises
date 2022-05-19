
// TODO: Prompt the user to enter a color. Select the first div with the class of "question", and change the font color to the users input.
let choice = prompt("Please enter a color.");

let div1 = document.getElementsByClassName("question")[0];
console.log(document.getElementsByClassName("question"));

div1.style.color = choice;

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
// May 19
//Should I use commas between arrays???? Ask question on comma and if I have to use brackets or can use objects and pull information?
//// 1. Create a button with the id of addTodo. Create an input of type text with the id of "todo"
// // 2. Create an unordered list with the id="todosList"
// // 4. When the add button is clicked: (step 1)
// //       a. Make it such that the value from the input is added to a list items.
// //          example: <li>input</li> inside of <ul>
//   //       b. Reset the value in the addTodos input.
//   // 5. If the value for the input is empty. Prevent it from creating another <li> element
//   white_check_mark (step 2) and (step 3)
//   +1
//   raised_hands
//CORRECT ANSWER:
let toDoElement= document.getElementById("todo");
let toDoList = document.getElementById("todosList");
let toDoButton = document.getElementById("addTodo");

toDoButton.addEventListener("click", function (){
    if (toDoElement.value !== ""){
        let str = "<li>" + toDoElement.value + "</li>";
        toDoList.innerHTML = str;
        toDoElement.value = "";
    }
});
//
// document.getElementById("todolist").addEventListener(("click",function (){
// let li = document.getElementById('todosList').addEventListener()
//     for(let i=0; i<li.length; i++){
//     li[i] <h3>U+2713 JavaScript</h3>
// }

//     let li = document.getElementsByTagName("li");
// console.log(li);
//
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[2].style.fontWeight ="bold";
// for (let i=0; i<li.length;i++){
//     li[i].style.backgroundColor = "lightblue";
// }
