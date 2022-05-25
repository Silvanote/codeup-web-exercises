"use strict";

document.write("<h2>HTML code</h2>");

let hello = "hello world";

function testSheet (){
    alert("hello");
}

testSheet()

function getaNumeric (input){
    if(typeof(input)==="number"){
        return "number"
    } else {
        return "not a number"
    }
}

function numberTest (randomNumber){
    let aNumber = (parseFloat(randomNumber));
    if(randomNumber % 2 === 0) {
        return "even";
    }else{
        "odd"
    }
}

function doubleUp (array){
    let double = [];
    for (let something of array){
        double.push(something *2);
    }
    return double;
}

function sumItUp (price){
    let sum = 0;
    let i = [];
    for(i=0; i<price.length;i++) {
        sum = sum + price[i];
    }
    return sum;
}

function findHighestPrice(array){
    let bucket = 0;
    for(let element of array){
        if(element.price > bucket){
            bucket = element.price
        }
    }
    return bucket;
}

function discCheck(input){
    if(input.member === true ||(totalPrice(input.items) > 150)){
    return true;
} else{
    return false;
}
}

function newStuff(name,price){
    let newobj = {};
        newobj.name = name;
        newobj.price =  price;
    return newobj;
    };



