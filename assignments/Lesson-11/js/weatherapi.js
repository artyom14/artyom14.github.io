var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'api.openweathermap.org/data/2.5/forecast?id=5061036', true);
weatherRequest.send();
weatherRequest.onload = function () {

    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
        document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
}