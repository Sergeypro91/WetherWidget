$(document).ready(function() {

  function weather(URL) {
    $.getJSON(URL, function(data){
      updateDOM(data);
    });
  }
  
  function updateDOM(data) {
    
    var city = data.name;
    var temperature = Math.round(data.main.temp);

    if (temperature > 0) {
        temperature = '+' + temperature;
        } 

    var humidity = data.main.humidity + ' %';
    var windSpeed = Math.round(data.wind.speed) + ' м/с';
    var pressure = Math.round(data.main.pressure) + ' мм рт.ст.';
    var icon = data.weather[0].icon;
    var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
    
    $('.city__name').html(city);
    $('.temperature__current').html(temperature);
    $('.otherParameters__humidity').html(humidity);
    $('.otherParameters__windSpeed').html(windSpeed);
    $('.otherParameters__pressure').html(pressure);
    $('.temperature__img').attr('src', iconUrl);
  }

  weather('https://api.openweathermap.org/data/2.5/weather?lat=43.1151&units=metric&lon=131.8856&APPID=027b14fea92c2edbe2c6aca5c7994af5');

  var city = [
    'https://api.openweathermap.org/data/2.5/weather?lat=48.7107&units=metric&lon=44.5168&lang=ru&APPID=027b14fea92c2edbe2c6aca5c7994af5',
    'https://api.openweathermap.org/data/2.5/weather?lat=43.1151&units=metric&lon=131.8856&APPID=027b14fea92c2edbe2c6aca5c7994af5'
    ];

  var i = 0;

  setInterval(function(){
    
    if (i ==! city.length) {
      weather(city[i]);
      i++;
    } else {
      weather(city[i]);
      i = 0;
    }

  }, 4000);      
});