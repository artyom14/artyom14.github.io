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

    var condition = forecast[0].weather[0].description;
    var temperature = parseInt(forecast[0].main.temp);
    var humidity = parseInt(forecast[0].main.humidity);
    var windSpeed = parseInt(forecast[0].wind.speed);

    var day1Temp = parseInt(forecast[4].main.temp_max);
    var day2Temp = parseInt(forecast[12].main.temp_max);
    var day3Temp = parseInt(forecast[20].main.temp_max);
    var day4Temp = parseInt(forecast[28].main.temp_max);
    var day5Temp = parseInt(forecast[36].main.temp_max);
    
    var iconID = forecast[0].weather[0].icon;
    var weatherIcon = 'https://openweathermap.org/img/w/'+(iconID)+'.png';


    document.getElementById('condition').innerHTML = condition;
    document.getElementById('temp').innerHTML = temperature;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('windSpeed').innerHTML = windSpeed;
    document.getElementById('day1').innerHTML = day1Temp;
    document.getElementById('day2').innerHTML = day2Temp;
    document.getElementById('day3').innerHTML = day3Temp;
    document.getElementById('day4').innerHTML = day4Temp;
    document.getElementById('day5').innerHTML = day5Temp;
    document.getElementById('currentWeather').src = weatherIcon;
    document.getElementById('weatherDescription').innerHTML = condition;

};
