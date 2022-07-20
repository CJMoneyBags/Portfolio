import {
    datetUpdate,
    getLocation,
    inputCheck,
    windDirection
} from './functions.js';

let latitude, longitude, zip;

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const weatherAPI = `,us&units=imperial&APPID=cec6688f1b2e49611b637187174f926d`;

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
const forecastAPI = ',us&units=imperial&cnt=5&appid=cec6688f1b2e49611b637187174f926d';


const apiWeather = document.getElementById('weather');
const apiForecast = document.getElementById('forecast');

const outputDiv = document.getElementById('output');
const forecastOutput = document.getElementById('forecastOutput');
document.getElementById('icon').style.display = 'none';
forecastOutput.style.display = 'none';

let zipInput = document.getElementById('zipCode');

window.addEventListener('change', () => {
    inputChange()
}, false);


apiWeather.addEventListener('click', () => {
    weather()
}, false);

apiForecast.addEventListener('click', () => {
    forecast()
}, false);

zipInput.addEventListener('input', () => {
    inputCheck()
}, false);

function inputChange() {
    getLocation('output');
    datetUpdate();
    forecastOutput.style.display = 'none';
    zip = parseInt(document.getElementById('zipCode').value);
    zipInput.focus();

    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            outputDiv.innerHTML = 'You need to put in a valid Zip';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText)
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            document.getElementById('tempIcon').setAttribute('alt', data.weather[0].description);
            let dayNight = data.weather[0].icon;
            dayNight.slice(-1);
            if (dayNight.slice(-1) == 'n') {
                document.getElementById('icon').style.backgroundColor = "white";
            }
            outputDiv.innerHTML = `<div id='initialLoad'>${data.main.temp}°F</div>`
            return fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('icon').style.display = 'block';
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.blob())
        .then((img) => {
            document.getElementById('tempIcon').src = URL.createObjectURL(img);
        })
        .catch(error => console.log('There was an error:', error))
}


function weather() {
    zip = parseInt(document.getElementById('zipCode').value);
    forecastOutput.style.display = 'none';
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            outputDiv.innerHTML = 'You need to put in a valid Zip';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            let output = `<h2>Weather Conditions for <strong>${data.name}</strong> </h2>`;
            outputDiv.innerHTML = output +=
                `<ul>
            <li>Weather Description <strong>${ data.weather[0].description} </strong></li>
            <li>Currently <strong>${data.main.temp }°F</strong> and feels like <strong> ${data.main.feels_like}°F </strong></li>
            <li>Humidity at <strong> ${ data.main.humidity }% </strong></li>
            <li>Current visibility <strong>${ data.visibility}</strong></li>
            <li>Wind speed <strong> ${ data.wind.speed} MPH</strong></li>
            <li>Wind Direction<strong> ${windDirection(data.wind.deg)}</strong></li>
            </ul>
            `
        })
        .catch(error => console.log('There was an error:', error))
}

function forecast() {
    zip = parseInt(document.getElementById('zipCode').value);
    forecastOutput.innerHTML = '';
    forecastOutput.style.display = 'flex';
    fetch(forecastURL + zip + forecastAPI)
        .then(response => {
            outputDiv.innerHTML = 'You need to put in a valid Zip';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            let output = `<h2>Forecast for  ${data.city.name}</h2>`;
            outputDiv.innerHTML = output += `
            <ul>
            <li>Sunrise: ${new Date(data.city.sunrise*1000).toLocaleString()}</li>
            <li>Sunset: ${new Date(data.city.sunset*1000).toLocaleString()}</li>
            </ul>
            <br>
        `;
            for (let i = 0; i < 5; i++) {
               const date = new Date(data.list[i].dt*1000).toLocaleString();
               const options = { weekday: 'long'};
                forecastOutput.innerHTML += `
            <div class='forecast'>
            <ul>
            <li><strong>${new Intl.DateTimeFormat('en-US', options).format(date)}</strong></li><br>
            <li>Low: <strong>${data.list[i].main.temp_min}°F</strong></li>
            <li>High: <strong>${data.list[i].main.temp_max}°F</strong></li>
            <li>Description: <strong>${data.list[i].weather[0].description} </strong></li>
            <li>Wind: <strong>${data.list[i].wind.speed}mph ${windDirection(data.list[0].wind.deg)}</strong></li>
            </ul>
            <hr>
            </div>
            `;
            }
        })
        .catch(error => console.log('There was an error:', error))
}
