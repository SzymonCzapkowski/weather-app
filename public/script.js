const btn = document.querySelector('#button');
btn.addEventListener("click", fetch_api);

function fetch_api() {
    let inp = document.querySelector('.form_city');
    let city = inp.value;
    current_weather(city)
}

function current_weather(city) {
    let url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`;
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.main.temp);
            console.log(resp.main.pressure);
            console.log(resp.weather[0].description);

            const name = document.querySelector('.name');
            name.textContent = city;

            const conditions = document.querySelector('.conditions');
            conditions.textContent = resp.weather[0].description;

            const temp = document.querySelector('.temp');
            temp.textContent = resp.main.temp + "°C";

            const pressure = document.querySelector('.pressure');
            pressure.textContent = resp.main.pressure + " hPa";
        })
}

