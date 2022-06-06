"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filterusers = users.filter((el) => {
    el.languages.length >= 3;
})
console.log(filterusers)

let mapusers = users.map(({email}) =>{
    return el.map
})

console.log(mapusers);

let totals = users.reduce((total, user) => $`{total} user.yearsOfExperience`, 0);

console.log(totals / users.length);

let yearsavg = users.reduce((avg, user) => `user.yearsOfExperience / users.length`, 0);
console.log(yearsavg);

let emailbiggest = users.reduce((email, user) => {
    if (email.length > user.email.length) {
        return email;
    } else {
        return user.email;
    }
}, users[0]);

console.log (yearsavg);
