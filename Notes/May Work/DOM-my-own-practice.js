"use script"
// Examine the document object

console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.forms);
console.log(document.images);

// Selectors to query the DOM
// Get Element by ID
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log(headerTitle);
// console.log(document.getElementById("header-title"));
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
headerTitle.innerHTML = "<h3>Hello</h3>"
header.style.borderBottom = "solid 3px #000";

// GET Elements by Class Name
let items = document.getElementsByClassName("list-group-item");
console.log(items);

console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
//next command will not work because needs to be looped
// items[1].style.backgroundColor = "yellow";
for (let i=0; i<items.length;i++){
    items[i].style.backgroundColor = "gray";
}

// Get Elements by Tag Name
let li = document.getElementsByTagName("li");
console.log(li);

console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[2].style.fontWeight ="bold";
for (let i=0; i<li.length;i++){
    li[i].style.backgroundColor = "lightblue";
}

//QUERY SELECTOR - use for one item, first one//
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px black";

let input = document.querySelector("input");
input.value = "Hello World";

let submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

let item = document.querySelector(".list-group-item");
item.style.color = "red"

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue"

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral"

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.color = "purple"




