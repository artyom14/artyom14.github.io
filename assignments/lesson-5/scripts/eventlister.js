 var eventArticle = document.querySelector('article.otherEvents');
    var eventRequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var eventRequest = new XMLHttpRequest();
    eventRequest.open('GET', eventRequestURL);
    eventRequest.responseType = 'json';
    eventRequest.send();
    eventRequest.onload = function() {
        var event = eventRequest.response;
        showEvents(event);
    }
    
    function showEvents(jsonObj) {
        var towns = jsonObj['towns'];
        
        var section = document.createElement('section');
        
        for (i = 0; i < towns.length; i++){
            
            let k = document.getElementById("active").innerHTML;
            if (k == towns[i].name){ 
                
                for (q = 0; q < towns[i].events.length; q++){
                                
                    var p = document.createElement('p');
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    
                    let eventInfo = towns[i].events[q];
                    let n = eventInfo.indexOf(":");
                    span1.textContent = eventInfo.slice(0, n);
                    span2.textContent =  eventInfo.slice(n+2);
                    span1.className = "date";
                    span2.className = "eventName";
                    p.appendChild(span1);
                    p.appendChild(span2);

                    section.appendChild(p);
                }
                
                eventArticle.appendChild(section);
            }
        }
        
}
