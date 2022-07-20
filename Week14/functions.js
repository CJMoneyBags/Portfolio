export var lat, lon;

let note;

export function getLocation() {
    note = document.getElementById('output');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        note.innerHTML = "Geolocation is not supported.";
    }
}

function showPosition(position) {
    lat = Number(position.coords.latitude).toFixed(3);
    lon = Number(position.coords.longitude).toFixed(3);
    note.innerHTML = `<p>The coordinates of ${lat} and ${lon} are received from the browser</p>`;

}

export function datetUpdate() {
    let dateTime = new Date();
    document.getElementById('dateTime').innerHTML ="At Last Update: " + (dateTime.getMonth() + 1) + "/" +
        dateTime.getDate() + "/" +
        dateTime.getFullYear() + " at " +
        dateTime.toLocaleTimeString();
}

export function inputCheck() {
    const regex = (/\d{5}/g);
    document.getElementById('zipCode');
    let zip = document.getElementById('zipCode').value;
    if (zip != 'undefined' && regex.test(zip)) {
        document.getElementById('zipCheck').innerHTML =
            `<p style="color:green";><i>Zip Code Received</i></p>`;
    } else {
        document.getElementById('zipCode').autofocus;
        document.getElementById('zipCheck').innerHTML =
            `<p style="color:red";><i>Zip Code Invalid - must be 5 numbers</i></p>`;
    }
}

export function windDirection(degrees) {
    const windArray = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const windDir = windArray[Math.ceil(degrees / 22.5) % 16];
    return windDir;
}
