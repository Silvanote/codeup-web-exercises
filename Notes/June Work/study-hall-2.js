"use strict"

let newLoop = [
    {
        name: 'dude',
        email: 'dude@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'jack',
        email: 'jack@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'ray',
        email: 'ray@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'craig',
        email: 'craig@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

let oldLoop = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

function oldLooping (){
    for(let i = 0; i < oldLoop.length; i++){
        console.log(oldLoop[i]);
    }
}
oldLooping();

function newLooping(){
    for(let loop of newLoop){
        console.log(loop)
    }
}
newLooping();

var obj = {
    "key": "value",
    "number": 45,
    "arr": [1, 2, 3]
};

console.log(obj.key);

function keepOnMultiplying () {
    let num = 1;
    while (num <= 65537) {
        num*=2;
        console.log(num);
    }
}