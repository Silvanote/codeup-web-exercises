// multiplyBy2Alot();
// let i = 2;
// while (i < 65537) {
//     console.log(i);
//     i+=i;
// }
//This is how you get a random number between 50 and 100

let allCones = Math.floor(Math.random() * 51) + 50;

do{
    // This expression will generate a random number between 1 and 5
    let customerOrder = Math.floor(Math.random() * 5) + 1;
    console.log("Customer orders" + customerOrder + "cone(s). We have " + allCones + "left in stock.");
    if (customerOrder > allCones) {
        console.log("Order cannot be fulfilled. NEXT!");
    } else {
        allCones -= customerOrder;
        console.log("here you go! We not have" + allCones + "left in stock.");
    }
} while (allCones > 0);

console.log("Whew! What a day. Sold all the cones.")
//
function iceCreamTruckProgram () {
    // This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 51) + 50;
    let numOfCustomers = 0;

    do {
        numOfCustomers++;
        // This expression will generate a random number between 1 and 5
        let customerOrder = Math.floor(Math.random() * 5) + 1;
        console.log("Customer orders " + customerOrder + " cone(s). We have " + allCones + " left in stock.");
        if (customerOrder > allCones) {
            console.log("Order cannot be fulfilled. NEXT!");
        } else {
            allCones -= customerOrder;
            console.log("Here you go! We now have " + allCones + " left in stock.");
        }
    } while (allCones > 0);

    console.log("Whew! What a day... Sold out of all my cones. And it only took " + numOfCustomers + " customers.");
}

iceCreamTruckProgram();
//Had no idea how to do this loop!