"use strict"
//lists the types of coffee and puts them on col-6(left side), bolds, grabs coffee name and mutes the type of roast associated with the name.
function renderCoffee(coffee) {
    let html = '<div class="col-6">' + '<strong>' + coffee.name + '</strong>' + '<span class=\"text-muted\"> ' + coffee.roast + '</span>' + '</div>';
    return html;
}
//all function option
function renderCoffees(coffees, roastTypes) {
    let html = '';
    if(roastTypes === "all") {
        for (let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}
//created bucket for filtered coffee by using a for Each loop.  Once user selects the coffee roast type OR "all" then the function is to add via the "push" option and list accordingly.
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || (selectedRoast == "all")        ) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees, "all");
}

//first the inputValue.value identifies the coffee name and then a bucket is created to associate the roast and filters.
function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = inputValue.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedRoast.toLowerCase())){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees, "all");
}
//
function updateCoffees3(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedName = document.getElementById("coffee-name2").value;
    let selectedRoast = document.getElementById("roast-selection2").value;
    coffees.push({id:coffees.length, name: selectedName, roast: selectedRoast});
    tbody.innerHTML = renderCoffees(coffees, "all");
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');

let submitButton = document.querySelector('#submit');

let roastSelection = document.querySelector('#roast-selection');

let inputValue = document.querySelector("#coffee-name");

inputValue.addEventListener("input",updateCoffees2);

tbody.innerHTML = renderCoffees(coffees,"all");

submitButton.addEventListener('click', updateCoffees);

let submitButton2 = document.querySelector("#submit2");

submitButton2.addEventListener("click",updateCoffees3);
