//Practice to prep for test #2

//#1
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3] Example output: [3, 5]
let arr = ["fred", true , 5, 3];

let onlyNumbers = arr.filter(
    element => typeof element === 'number'
);
console.log(onlyNumbers);

//#2
// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
// Example input:
    // [
    //     {
    //         name: "Chompers",
    //         breed: "Pug",
    //         age: 7
    //     },
    //     {
    //         name: "Freddy",
    //         breed: "Lab",
    //         age: 4
    //     },
    //     {
    //         name: "Mr. Pig",
    //         breed: "Mastif",
    //         age: 10
    //     }
    // ]
function getOlder(input){
 for(let i=0; i<input.length; i++){
  input[i].age += 1;
 }
 return input;
}
 console.log(getOlder(dogObjects));