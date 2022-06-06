"use strict";

//asynch and Promises
//L1
console.log('sandwich Synchronous 1');

//L2
setTimeout(_=> console.log('apple Timeout 2'), 0);

//L3
Promise.resolve().then(_ => console.log('pineapple Promise'));

//L4
console.log('sandwich Synchronous 4');

import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos')

promise
    .then(res => res.json())
    .then(user => console.log('happy face', user.title))
    .catch(err => console.error('sad face', err))

console.log('sandwich Synchronous')

const codeBlocker = () => {
    // let i = 0;
    // while (i < 1000000000){i++;}
    // return "pig billion loops done";

    return new Promise((resovle, reject) => {
        let i = 0;
        whilte()
    })
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000)
        {
            i++;
        }
        return 'pig billion loops done';
    })
}
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }
    return Promise.resolve(fruits[name]);

getFruit('peach').then(console.log)


}