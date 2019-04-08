let x = document.getElementById("button").addEventListener("click", getLocation);
const city = document.querySelector('.name');
const temp = document.getElementById('.temp');
const pres = document.getElementById('.pressure');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported";
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=e555bd288a7a6180c740ec62839f209e&units=metric`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp.name);
        console.log(resp.main.temp);
        console.log(resp.main.pressure);
        console.log(resp.weather[0].description);
        city.textContent = resp.name;
        temp.innerText = resp.main.temp + "°C";
        pres.innerText = resp.main.pressure + "hPa";
    })
    .catch(error => console.error(error));
}
