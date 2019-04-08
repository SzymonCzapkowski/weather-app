let api = '{"city":{"id":6940463,"name":"Altstadt","coord":{"lon":11.5752,"lat":48.137},"country":"DE","population":0},"cod":"200","message":0.1094425,"cnt":7,"list":[{"dt":1487242800,"temp":{"day":286.67,"min":272.78,"max":286.67,"night":273.34,"eve":277.05,"morn":281.56},"pressure":972.73,"humidity":75,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.81,"deg":248,"clouds":0},{"dt":1487329200,"temp":{"day":278.25,"min":275.04,"max":278.25,"night":275.04,"eve":275.64,"morn":276.48},"pressure":966.98,"humidity":95,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":3.17,"deg":262,"clouds":92,"rain":11.74,"snow":0.31},{"dt":1487415600,"temp":{"day":277.93,"min":269.55,"max":278.37,"night":269.55,"eve":273.8,"morn":274.56},"pressure":966.06,"humidity":95,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.86,"deg":244,"clouds":8,"snow":0.09},{"dt":1487502000,"temp":{"day":276.41,"min":267.97,"max":276.41,"night":269.77,"eve":273.57,"morn":267.97},"pressure":933.27,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.57,"deg":142,"clouds":74},{"dt":1487588400,"temp":{"day":276.28,"min":271.12,"max":276.28,"night":273.12,"eve":274.52,"morn":271.12},"pressure":938.21,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":1.79,"deg":248,"clouds":88,"rain":0.93,"snow":0.38},{"dt":1487674800,"temp":{"day":278.1,"min":271.73,"max":278.1,"night":272.55,"eve":274.01,"morn":271.73},"pressure":945.82,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.19,"deg":262,"clouds":25,"snow":0.01},{"dt":1487761200,"temp":{"day":281.76,"min":273.21,"max":281.76,"night":278.88,"eve":279.22,"morn":273.21},"pressure":945.21,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.98,"deg":272,"clouds":65,"rain":1.48}]}';

const convertedApi = JSON.parse(api)
const weatherCondition = convertedApi.list[0].weather[0].main
const time = (new Date()).getHours()+':'+(new Date()).getMinutes()
const clouds = convertedApi.list[0].clouds



const checkWeather = function (x) {
    if (time>'06:00' && time<'20:00') {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(sunny.jpg)"
    } else {  
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(night.jpg)"
    }

    if (clouds>50) {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(day with clouds)"
    } else {  
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(night with clouds)"
    }

    if (x == "Rain") {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'rain.js');
        document.head.appendChild(script);
        return false;
    }

    if (x == "Snow") {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'snow.js');
        document.head.appendChild(script);
        return false;
    }

    if (x == "Thunderstorm") {
    var script = document.createElement('link');
    script.setAttribute('rel', 'stylesheet');
    script.setAttribute('type', 'text/css');
    script.setAttribute('href', 'storm.css');
    document.head.appendChild(script);
    return false;
    }
}

checkWeather(weatherCondition)