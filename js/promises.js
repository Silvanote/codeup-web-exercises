"use strict"

let URL = "https://api.github.com/users/{username}/events/public"

fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
    .then(res => res.json())
    .then(results => results[0])
    .then(firstEvent => console.log(firstEvent))

const commitsUploaded = (username) => {
    const URL2 = `https://api.github.com/users/${username}/events/public`

    return fetch(URL2, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(res => res.json())
        .then(results => results[0])
        .then(firstEvent => console.log(firstEvent.created_at))
        .catch(error => console.error(error))
}
commitsUploaded('Silvanote');

// fetch('https://api.github.com/users')
// .then( response => {response.json()
// .then( users => { users.forEach( user => {
//  //   do something with each user object...
//             console.log(user);
//         });
//     });
// });
//
// // Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
// // Octokit.js
// // https://github.com/octokit/core.js#readme
//
//     .then((responses) => responses.json())
//     .then((data) => {
//         console.log(data)
//     })
//
//
// const octokit = new Octokit({
//     auth: 'GITHUB_TOKEN'
// })
//
// await octokit.request('GET /users/{Silvanote}/received_events', {
//     username: 'Silvanote'
// })
// const URL = "https://api.github.com/users/{Silvanote}/events/public";
//
// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });