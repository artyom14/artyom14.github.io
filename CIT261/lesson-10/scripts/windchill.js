var temperature, speed, chill;
speed = 5^0.16;
temperature = 66;
chill = 35.74 + 0.6215 * temperature - 35.75 * speed + 0.4275 * temperature * speed;
document.getElementById("windchill").innerHTML = "Wind Chill: " + chill + " F";