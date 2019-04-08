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
            let url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`;
            fetch(url)
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp.main.temp);
                    console.log(resp.main.pressure);
                    console.log(resp.weather[0].description);
                    console.log(resp.weather[0].id);
                    console.log(resp.clouds);

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

        function show() {

                 document.getElementById('show').style.display = '';
            
                document.getElementById('show2').style.display = '';


                
        }