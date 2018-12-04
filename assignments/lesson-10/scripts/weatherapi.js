var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=cbbcc87459d74ae8dcbb6a58e397d939&units=imperial';
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', requestURL);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    getWeather(weatherData);
};

function getWeather(jsonObj){
    var forecast = jsonObj['list'];

    var temperature = forecast[0].main.temp;

    document.getElementById('current-temp').innerHTML = temperature;
};
