




const btn = document.querySelector(#btn);
btn.addEventListener("click", function () {
    fetch('https://openweathermap.org/data/2.5/weather?q=Warsaw&appid=b6907d289e10d714a6e88b30761fae22')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.main.temp)
        });


