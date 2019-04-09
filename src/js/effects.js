let api = '{"list":[{"weather":[{"id":800}],"clouds":0}]}';

const convertedApi = JSON.parse(api)
const weatherId = convertedApi.list[0].weather[0].id
const clouds = convertedApi.list[0].clouds


const time = (new Date()).getHours()+':'+(new Date()).getMinutes()


const checkWeather = function (weatherId,clouds) {
    if (time>'06:00' && time<'20:00') {
            if (clouds>70) {
                document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny2.jpg)";
            } else if (clouds>30 && clouds<70) {
                document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny1.jpg)";
            } else {
                document.getElementsByTagName("body")[0].style.backgroundImage = "url(../src/img/sunny.jpg)";
            }         
    } else { 
        if (clouds>70) {
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

checkWeather(weatherId,clouds)

