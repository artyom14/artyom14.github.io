    var section = document.querySelector('section.townsDisplay');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var towns = request.response;
        showTowns(towns);
    }
    

    function displayImage(){
        var imagesArray = ["./images/image01.jpg", "./images/image02.jpg", "./images/image03.jpg", "./images/image04.jpg", "./images/image05.jpg", "./images/image06.jpg"];
        var num = Math.floor(Math.random() * (imagesArray.length)); 
        return imagesArray[num];
    }
    
    function showTowns(jsonObj) {
        var cities = jsonObj['towns'];
            
        for (var i = 1; i < cities.length-1; i++) {
            if (i != 2 && i != 3) {
                
            var townArticle = document.createElement('article');
            var title = document.createElement('h3');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var img = document.createElement('img');
            var link = document.createElement('a');
            
            title.textContent = cities[i].name;
            p1.textContent = cities[i].motto;
            p2.innerHTML = '<span>Year Founded: </span>' + cities[i].yearFounded;
            p3.innerHTML = '<span>Population: </span>' + cities[i].currentPopulation;
            p4.innerHTML = '<span>Annual Rain Fall: </span>' + cities[i].averageRainfall;
            img.src = displayImage();
            townArticle.id = title.textContent.charAt(0).toLowerCase()+ title.textContent.replace(/\s+/, "").slice(1);
            img.alt = townArticle.id;

            link.href = townArticle.id.toLowerCase() + '.html';

            townArticle.appendChild(title);
            townArticle.appendChild(p1);
            townArticle.appendChild(p2);
            townArticle.appendChild(p3);
            townArticle.appendChild(p4);
            townArticle.appendChild(img);
            townArticle.appendChild(link);

            section.appendChild(townArticle);

            }
        }
        
        
}

