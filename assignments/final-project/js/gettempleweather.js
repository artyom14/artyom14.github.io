const gilbertWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

const ogdenWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5779206&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

const mantiWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5542758&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

const sanDiegoWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';




fetch(gilbertWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {

    // console.table(jsonObject);

    document.getElementById("current-weather-0").innerHTML = jsonObject['main']['temp'] + "°F, " + jsonObject["weather"][0]["main"];  

  });




fetch(ogdenWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
      
    // console.table(jsonObject);

    document.getElementById("current-weather-1").innerHTML = jsonObject['main']['temp'] + "°F, " + jsonObject["weather"][0]["main"];  

  });




fetch(mantiWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
      
    // console.table(jsonObject);

    document.getElementById("current-weather-2").innerHTML = jsonObject['main']['temp'] + "°F, " + jsonObject["weather"][0]["main"];  

  });
  
  
  

fetch(sanDiegoWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
      
    // console.table(jsonObject);

    document.getElementById("current-weather-3").innerHTML = jsonObject['main']['temp'] + "°F, " + jsonObject["weather"][0]["main"];  

  });