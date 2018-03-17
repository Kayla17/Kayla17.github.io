//beginning Greenville data

var requestURL = '//api.wunderground.com/api/997fa104ce7cd04a/conditions/forecast/q/TX/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var greenvilleWeather = JSON.parse(request.responseText);
    console.log(greenvilleWeather);
    
    document.getElementById('weatherCondition').innerHTML = greenvilleWeather.current_observation.weather;
    
    document.getElementById('temp').innerHTML = greenvilleWeather.current_observation.temp_f;
    
    var icon_path = greenvilleWeather.current_observation.icon_url;
    
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    
    document.getElementById('weather_icon').src = icon_path
    
    document.getElementById('windspeed').innerHTML = greenvilleWeather.current_observation.wind_mph;
    
   // document.getElementById('windchill').innerHTML = greenvilleWeather.current_observation.windchill_f;
    
    document.getElementById('txtForecast').innerHTML = greenvilleWeather.forecast.txt_forecast.forecastday["0"].fcttext;
}

//end Greenville data