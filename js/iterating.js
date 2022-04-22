(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Dalton", "Damon", "Juan", "Kevin"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[1]); // 2
    console.log(names[2]); // 3
    console.log(names[0]); // 1
    console.log(names[3]); // 4
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    let index = 0;
    for (let name of names) {
        console.log(name)
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name) {
        console.log("This is the name of one of the guys who sit on Row 1 " + name + ".");
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The last name is: ' + names[3]);

    function first(arrays){
        return arrays[0];
    }
console.log(first(names));

    function second(arrays2){
        return arrays2[1];
    }
    console.log(second(names));
function third(arrays3){
    return arrays3[3];
}
console.log(third(names));

})();
