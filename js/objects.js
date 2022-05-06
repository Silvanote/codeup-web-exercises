(function() {
    "use strict";
// Examples
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     *
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// let person = {
//         firstName : "Juan",
//         lastName : "Silva"
//     }
//     console.log(person.firstName);

// console.log(person.lastName);
// another example
//
// const person = {};
    //person.firstName = "Joe";
    //person.lastName = "Montana";
    //console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
// EXAMPLE kamea.age = 8;

//     person.sayHello = "Hello from " + person.firstName + " " + person.lastName;

// person.age = 45

// console.log(person.sayHello);
// console.log(person);

    //EXAMPLE

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
)
for(let shoppers1 of shoppers) {
    if (shoppers.amount > 200){
    let discount = shoppers.amount * .12
    let
        }else
        let noDiscount = shopper.name + " has no discount because " + shopper.name + " did not reach $200 minimum purchase."
    {
            }
        }
// //EXAMPLE
//     const shoppers = [
//         {name: "Bob", amount: 180}
//         {name: "Henk", amount: 250}
//         {name: "Alexey", amount: 320}
//     ];
//
// const amountToDiscount = 200
//
//     function hebDisc(){
//     for(let x = 0; x < shoppers.legth; x++){
//         if (shoppers[x].amount <= amounttoDiscount){
//             console.log(shoppers[x].name)
//         }
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    EXAMPLE:

    title
author
    firstName
    lastName

let books = [

]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

//     EXAMPLE: SOLUTION
//
// books.forEach(function(book: index){
//     console.log("Book #" + (index + 1) + "\nTitle: " + book.title + "\nAuthor:" + book.author.firstName + "" + book.author.lastName + "\n/")
// })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
//EXAMPLE
// function createBook(title, author)
//     let author1 = author.split(" ");
//     if (author1.length < 2) {
//         return {
//             title,
//             author{
//                 firstName: "",
//                 lastName: author1[0]
//             }
//         };
//     }else {
//         return {
//             title,
//             author: {
//                 firstName: author1[0]
//                 lastName: author1[1]
//             }
//         }
//     }
// }
// let title = prompt("Hey tell myour favorite book's title")
// let author = prompt("And who wrote that?")
//
// let bookFromPrompt = createBook(title, author);
// console.log(bookFromPrompt);

})();
