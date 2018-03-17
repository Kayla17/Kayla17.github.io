var requestURL = '//api.wunderground.com/api/997fa104ce7cd04a/conditions/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);
    
    document.getElementById('weatherCondition').innerHTML = franklinWeather.current_observation.weather;
    
    document.getElementById('temp').innerHTML = franklinWeather.current_observation.temp_f;
    
    var icon_path = franklinWeather.current_observation.icon_url;
    
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    
    document.getElementById('weather_icon').src = icon_path
    
    document.getElementById('windspeed').innerHTML = franklinWeather.current_observation.wind_mph;
    
    document.getElementById('txtForecast').innerHTML = franklinWeather.forecast.txt_forecast.forecastday["0"].fcttext;
}