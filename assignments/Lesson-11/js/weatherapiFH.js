var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'api.openweathermap.org/data/2.5/weather?&id=5585010&units=imperial&APPID=351d4307eb914824188aee15570c17f5', true);
weatherRequest.send();
weatherRequest.onload = function () {

    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
        document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
}