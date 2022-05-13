"use script"

function keepOnMultiplying () {
    let num = 1;
    while (num <= 65537) {
        num*=2;
        console.log(num);
    }
}
function iceCreamPurchases() {
    let iceCreamOrders = Math.ceil(Math.random() * 50)+ 49;
    var startPurchases = 0;
    do{
        startPurchases++;
        let iceCreamOrders = Math.random(Math.ceil() * 5) + 1;
    if(iceCreamOrders > allStock){
    console.log("Not enough inventory to complete order, sorry.") + prompt("Please provide your email and we will contact you once more inventory is in stock.")}
    } while(
    allStock > iceCreamOrders)
    console.log("Thank you for your purchase, only" + allStock + "are left to purchase.");
}

console.log("We have no inventory left at this time.")

    iceCreamPurchases();