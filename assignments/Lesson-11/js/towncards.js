const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const towns = jsonObject["towns"];
  for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === "Fish Haven" || towns[i].name === "Preston" ||  towns[i].name ==="Soda Springs"){
      let card = document.createElement("section");
      let span = document.createElement("span");
      let h4 = document.createElement("h4");
      let motto = document.createElement("i");
      let year = document.createElement("p");
      let population = document.createElement("p");
      let rain = document.createElement("p");
      let image = document.createElement("img");
      h4.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      year.textContent = 'Year Founded: ' + towns[i].yearFounded;
      population.textContent = 'Population: ' + towns[i].currentPopulation;
      rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
      card.appendChild(span);
      span.appendChild(h4);
      span.appendChild(motto);
      span.appendChild(year);
      span.appendChild(population);
      span.appendChild(rain);
      card.appendChild(image);
      image.setAttribute('src', 'images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name); 
      document.querySelector('div.card').appendChild(card);}
}
});