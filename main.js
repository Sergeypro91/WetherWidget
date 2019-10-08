$(document).ready(function() {
 
  function weather() {
    var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=52.9685&lon=36.0692&APPID=027b14fea92c2edbe2c6aca5c7994af5';
    $.getJSON(URL, function(data){
      console.log(data);
      updateDOM(data);
    });
  }
  
  weather();
  
  function updateDOM(data) {
    
    var city = data.name;
    var temperature = Math.round(data.main.temp - 273);
    if (temperature > 0) {
        temperature = '+' + temperature;
        } 
    var humidity = data.main.humidity + ' %';
    var windSpeed = Math.round(data.wind.speed) + ' м/с';
    var pressure = Math.round(data.main.pressure) + ' мм рт.ст.';
    var icon = data.weather[0].icon;
    var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
    
    console.log(iconUrl);
    
    $('.city__name').html(city);
    $('.temperature__current').html(temperature);
    $('.otherParameters__humidity').html(humidity);
    $('.otherParameters__windSpeed').html(windSpeed);
    $('.otherParameters__pressure').html(pressure);
    $('.temperature__img').attr('src', iconUrl);
  }  
});