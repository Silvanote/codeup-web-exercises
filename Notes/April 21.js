"use strict";
// Your solutions will go here :)
function lowerCase(x){
    if(typeof x === 'string'){
        return x.toLowerCase();
    } else {
        return false;
    }
}
function isAllLowerCase(x){
    return typeof x === 'string' && x === x.toLowerCase();
}
function isAllUpperCase(x){
    return typeof x === 'string' && x === x.toUpperCase();
}
function multiplyBy2(x) {
    if (x === undefined || typeof parseFloat(x) !== 'number') {
        return false;
    } else if (x === randomName || typeof x === 'boolean' || typeof x === 'object' || x === null)
        return false;
    return x * 2;
}
function subtract (x, y) {
    if (isNaN(x) || isNaN(y) || x === null || y === null){
        return false
    } else if (typeof x === 'boolean' || typeof y === 'boolean')
        return false;
    return x - y;
}
function getLowestNumber (x, y, z) {
    if (x === null || y === null || z === null || x === true || y === true || z === true || typeof x === 'object' || typeof y === 'object' || typeof z === 'object'){
        return false;
    } else if (x < y && x < z){
        return x;
    } else if (y < x && y < z) {
        return y;
    } else if (isNaN(x) || isNaN(y) || isNaN(z)){
        return false;
    } else {
        return z;
    }
}
function convertHourToSec (x) {
    if (x === null || x === undefined || typeof x === 'object' || typeof x === 'boolean' || x < 0 || isNaN(x)){
        return false;
    }
    return 3600 * x;
}
function addStringLengths (x , y) {
    if (typeof x === 'number' || typeof y === 'number' || x === undefined || y === undefined || x === null || y === null || typeof x === 'boolean' || typeof  y === "boolean" || typeof x === "object" || typeof y === "object"){
        return false;
    }
    return x.length + y.length;
}
