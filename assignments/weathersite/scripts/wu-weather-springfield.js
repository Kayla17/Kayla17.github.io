//beginning Springfield data

var requestURL = '//api.wunderground.com/api/997fa104ce7cd04a/conditions/forecast/q/OR/Springfield.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var springfieldWeather = JSON.parse(request.responseText);
    console.log(springfieldWeather);
    
    //windchill info start
    /*
    var windspeed = springfieldWeather.current_observation.wind_mph;
    
    var temperature = springfieldWeather.current_observation.temp_f;
    
    var f = 35.74 + .6215 * temperature - 35.75 * Math.pow(windspeed, .16) + .4275 * temperature * Math.pow(windspeed, .16);
    */
    //windchill info end
    
    document.getElementById('weatherCondition').innerHTML = springfieldWeather.current_observation.weather;
    
    document.getElementById('temp').innerHTML = springfieldWeather.current_observation.temp_f;
    
    var icon_path = springfieldWeather.current_observation.icon_url;
    
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    
    document.getElementById('weather_icon').src = icon_path
    
    document.getElementById('windspeed').innerHTML = springfieldWeather.current_observation.wind_mph;
    
    //document.getElementById('windchill').innerHTML = springfieldWeather.current_observation.windchill_f;
    
    document.getElementById('txtForecast').innerHTML = springfieldWeather.forecast.txt_forecast.forecastday["0"].fcttext;
    
    //call windchill
    //document.getElementById('windchill').innerHTML = (f.toFixed(0));
}

//end Springfield data