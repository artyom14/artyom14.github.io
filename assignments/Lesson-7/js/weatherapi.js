var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7678dcb5254e28a8d18dc92acad6101c&units=imperial', true);
weatherRequest.send();
weatherRequest.onload = function () {

    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
        document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
}