const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response){return response.json();})
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ )
    {
        //Section
        let box = document.createElement('section');

        //H2 - Number
        let h2 = document.createElement('h2');
        h2.textContent = prophets[i].order;
        box.appendChild(h2);

        //H3 - Name
        let h3 = document.createElement('h3');
        h3.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        box.appendChild(h3);

        //Birth
        let birthPlace = document.createElement('p');
        let birthDate = document.createElement('p');
        birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
        birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
        box.appendChild(birthDate);
        box.appendChild(birthPlace);

        //Portrait
        let portrait = document.createElement('img')
        portrait.src = prophets[i].imageurl;
        portrait.alt = prophets[i].name + ' ' + prophets[i].lastname + " - " + (i + 1);
        box.appendChild(portrait);     
        
        document.querySelector('div.box').appendChild(box);
    }
  });