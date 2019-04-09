function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};

function showLocation(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let latlng = lat + ',' + lng;
    console.log(latlng);
    makeUrl(latlng);
};

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
    }
};


function makeUrl(latlng) {
    let api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
    let type = '&result_type=locality';
    let key = `&key=AIzaSyDom38u3yzqLTJQ9c7WwIvozLgZ6hhjj08`;
    let url = api + latlng + type + key;
    console.log(url);
    getJson(url)
};


let city = ' ';

function getJson(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            city = res.results[0].address_components[0].long_name;
            console.log(city);
            current_weather(city);
        })

};


const btn = document.querySelector('#button');
btn.addEventListener("click", fetch_api);

function fetch_api() {
    event.preventDefault()
    let inp = document.querySelector('.form_city');
    let city = inp.value;
    current_weather(city)
    event.preventDefault();
}

function current_weather(city) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a7da2e62b3e485e809eeddca7d8736ef`;
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {

            const name = document.querySelector('.recent_city .name');
            name.textContent = city;

            //Day 1
            let conditions = document.querySelector('.recent_city .conditions');
            conditions.textContent = resp.list[0].weather[0].description;
            let temp = document.querySelector('.recent_city .temp');
            temp.textContent = resp.list[0].main.temp + "°C";
            let pressure = document.querySelector('.recent_city .pressure');
            pressure.textContent = resp.list[0].main.pressure + " hPa";

            //Day 2
            conditions = document.querySelector('.next_day .conditions');
            conditions.textContent = resp.list[8].weather[0].description;
            temp = document.querySelector('.next_day .temp');
            temp.textContent = resp.list[8].main.temp + "°C";
            pressure = document.querySelector('.next_day .pressure');
            pressure.textContent = resp.list[8].main.pressure + " hPa";

            //Day 3
            conditions = document.querySelector('.third_day .conditions');
            conditions.textContent = resp.list[16].weather[0].description;
            temp = document.querySelector('.third_day .temp');
            temp.textContent = resp.list[16].main.temp + "°C";
            pressure = document.querySelector('.third_day .pressure');
            pressure.textContent = resp.list[16].main.pressure + " hPa";
        })
}

function show() {

    document.getElementById('show').style.display = '';

    document.getElementById('show2').style.display = '';

}
