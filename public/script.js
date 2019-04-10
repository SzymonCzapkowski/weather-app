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

            const city_name = document.querySelector('.city_name');
            city_name.textContent = city;

            //Day 1
            let conditions = document.querySelector('.recent_city .conditions');
            conditions.textContent = resp.list[0].weather[0].description;
            let temp = document.querySelector('.recent_city .temp');
            temp.textContent = resp.list[0].main.temp.toFixed(1) + "°C";
            let pressure = document.querySelector('.recent_city .pressure');
            pressure.textContent = resp.list[0].main.pressure.toFixed(1) + " hPa";
            let id1 = resp.list[0].weather[0].id;
            let clouds1 = resp.list[0].clouds.all;

            //Day 2
            conditions = document.querySelector('.next_day .conditions');
            conditions.textContent = resp.list[8].weather[0].description;
            temp = document.querySelector('.next_day .temp');
            temp.textContent = resp.list[8].main.temp.toFixed(1) + "°C";
            pressure = document.querySelector('.next_day .pressure');
            pressure.textContent = resp.list[8].main.pressure.toFixed(1) + " hPa";
            let id2 = resp.list[8].weather[0].id;
            let clouds2 = resp.list[8].clouds.all;

            //Day 3
            conditions = document.querySelector('.third_day .conditions');
            conditions.textContent = resp.list[16].weather[0].description;
            temp = document.querySelector('.third_day .temp');
            temp.textContent = resp.list[16].main.temp.toFixed(1) + "°C";
            pressure = document.querySelector('.third_day .pressure');
            pressure.textContent = resp.list[16].main.pressure.toFixed(1) + " hPa";
            let id3 = resp.list[16].weather[0].id;
            let clouds3 = resp.list[16].clouds.all;

            // *******************************checkWeather***************************

            // const time = (new Date()).getHours()+':'+(new Date()).getMinutes()
            const time = (new Date()).getHours()

            const checkWeather = function (weatherId,clouds) {
                if (time>='6' && time<'20') {
                    if (clouds>=70) {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny2.jpg)";
                    } else if (clouds>30 && clouds<70) {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny1.jpg)";
                    } else {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny.jpg)";
                    }         
                } else { 
                    if (clouds>=70) {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/night2.jpg)";
                    } else if (clouds>30 && clouds<70) {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/night1.jpg)";
                    } else {
                        document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/night.png)";
                    }   
                }

            // *********************Condtidions*****************************

                if (weatherId >= '500' && weatherId < '600') {
                    var script = document.createElement('script');
                    script.setAttribute('type', 'text/javascript');
                    script.setAttribute('src', '../src/js/rain.js');
                    document.head.appendChild(script);
                    return false;
                }

                if (weatherId >= '600' && weatherId < '700') {
                    var script = document.createElement('script');
                    script.setAttribute('type', 'text/javascript');
                    script.setAttribute('src', '../src/js/snow.js');
                    document.head.appendChild(script);
                    return false;
                }

                if (weatherId >= '200' && weatherId < '300') {
                    var script = document.createElement('link');
                    script.setAttribute('rel', 'stylesheet');
                    script.setAttribute('type', 'text/css');
                    script.setAttribute('href', '../src/css/storm.css');
                    document.head.appendChild(script);
                    return false;
                }
            }

            checkWeather(id1,clouds1)
        })

        
}

function show() {

    document.getElementById('show').style.display = '';

    document.getElementById('show2').style.display = '';

}

function showRandom() {
    const cities = [
        'Warsaw', 'Berlin', 'Paris', 'Madrid', 'Roma', 'Moscow', 'Dubai',
        'Bangkok', 'New York', 'Los Angeles', 'Buenos Aires', 'Hong Kong',
        'Tokyo', 'Sydney', 'Helsinki', 'Singapore', 'Lisbon', 'Las Vegas'
    ];
    let randomCity = cities[Math.floor(Math.random() * cities.length)]
    current_weather(randomCity);
}
