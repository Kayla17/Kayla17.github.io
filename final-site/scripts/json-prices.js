//requesting JSON data
var section = document.querySelector('tbody');

var requestURL = 'https://kayla17.github.io/final-site/data/data.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tableData = request.response;
    showData(tableData);
}

//services 
var myArticle = document.createElement('tbody');
       
var servicetitle = document.createElement('td');
var service1 = document.createElement('td');
var service2 = document.createElement('td');
var service3 = document.createElement('td');
var service4 = document.createElement('td');
        
servicetitle.textContent = 'Services:';
service1.textContent = 'Tighten/clean chain';
service2.textContent = 'Install/adjust brakes';
service3.textContent = 'Install/repair inner tube';
service4.textContent = 'Install handle bars';
        
myArticle.appendChild(servicetitle);
myArticle.appendChild(service1);
myArticle.appendChild(service2);
myArticle.appendChild(service3);
myArticle.appendChild(service4);
        
section.appendChild(myArticle);

//JSON data prices + loop
function showData(jsonObj) {
    var data = jsonObj['repairs-prices'];

    for (var i = 0; i < data.length; i++) {
        
        var myArticle = document.createElement('tbody');
       
        var para1 = document.createElement('td');
        var myPara1 = document.createElement('td');
        var myPara2 = document.createElement('td');
        var myPara3 = document.createElement('td');
        var myPara4 = document.createElement('td');
        
        para1.textContent = 'Prices:';
        myPara1.textContent = data[i].chain;
        myPara2.textContent = data[i].brakes;
        myPara3.textContent = data[i].innerTube;
        myPara4.textContent = data[i].handleBar;
        
        myArticle.appendChild(para1);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        
        section.appendChild(myArticle);
        
    }
}

        
        



