 
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];
    var myPara = document.createElement('p');
    
    data.splice(2,1);  //do some research on this
    
    for (var i = 0; i < data.length; i++) {
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        
        myH3.textContent = data[i].name;
        myPara1.textContent = 'Town motto: ' + data[i].motto;
        myPara2.textContent = 'Year founded: ' + data[i].yearFounded;
        myPara3.textContent = 'Population: ' + data[i].currentPopulation;
        myPara4.textContent = 'Annual rainfall: ' + data[i].averageRainfall;
        
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        
        section.appendChild(myArticle);
    }
}
