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
                .then(res => city = res.results[0].address_components[0].long_name)
            return city;
        };