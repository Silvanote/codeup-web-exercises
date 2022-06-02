const api = {
    key: "MAPBOX_API_KEY",
    baseurl: 'https://api.openweathermap.org/data/2.5'
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weahter.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');

}
