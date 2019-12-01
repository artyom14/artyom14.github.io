const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response){return response.json();})
  .then(function (jsonObject){
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ){
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let box = document.createElement("div");
        box.className = "box";

        let name = document.createElement("h2");
        let motto = document.createElement("h3");
        let yearfounded =document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let figure = document.createElement("figure");
        let img = document.createElement("img");

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearfounded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;       
        img.src = "images/" + towns[i].photo;
        img.alt = towns[i].name;

         box.appendChild(name);
         box.appendChild(motto);
         box.appendChild(yearfounded);
         box.appendChild(population);
         box.appendChild(rainfall);
         box.appendChild(figure);
         box.appendChild(img);
         figure.appendChild(img);
         document.querySelector('.towns').appendChild(box);
      }}
  });