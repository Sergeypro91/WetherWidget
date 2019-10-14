$(document).ready(function() {

  function weather(URL) {
    $.getJSON(URL, function(data){
      updateDOM(data);
    });
  }
  
  function updateDOM(data) {
    
    var city = data.name;
    var temperature = Math.round(data.main.temp);
    var temperaturePlusOrMinus;

    if (temperature > 0) {
        temperaturePlusOrMinus = '+';
      } else if (temperature < 0) {
        temperaturePlusOrMinus = '-';
        temperature = Math.abs(temperature);
      }

    var humidity = data.main.humidity + '%';
    var windSpeed = Math.round(data.wind.speed) + ' м/с';
    var pressure = Math.round(data.main.pressure) + ' мм рт.ст.';
    var icon = data.weather[0].icon;
    var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
    
    $('.city__name').html(city).addClass('show').removeClass('hide');
    $('.temperature__numbers').html(temperature).addClass('show').removeClass('hide');
    $('.temperature__plus-or-minus').html(temperaturePlusOrMinus).addClass('show').removeClass('hide');
    $('.otherParameters__humidity').html(humidity).addClass('show').removeClass('hide');
    $('.otherParameters__windSpeed').html(windSpeed).addClass('show').removeClass('hide');
    $('.otherParameters__pressure').html(pressure).addClass('show').removeClass('hide');
    $('.temperature__img').attr('src', iconUrl).addClass('show').removeClass('hide');

    function hideBlock(addClass) {
      $(addClass).addClass('hide').removeClass('show');
    }

    setTimeout(function(){
      hideBlock('.city__name');
      hideBlock('.temperature__numbers');
      hideBlock('.temperature__plus-or-minus');
      hideBlock('.otherParameters__humidity');
      hideBlock('.otherParameters__windSpeed');
      hideBlock('.otherParameters__pressure');
      hideBlock('.temperature__img');
    }, 4200);
  }

  weather('https://api.openweathermap.org/data/2.5/weather?lat=43.1151&units=metric&lon=131.8856&APPID=027b14fea92c2edbe2c6aca5c7994af5');

  var citys = [
    'https://api.openweathermap.org/data/2.5/weather?lat=48.7107&units=metric&lon=44.5168&lang=ru&APPID=027b14fea92c2edbe2c6aca5c7994af5',
    'https://api.openweathermap.org/data/2.5/weather?lat=43.1151&units=metric&lon=131.8856&APPID=027b14fea92c2edbe2c6aca5c7994af5'
    ];

  var i = 0;

  setInterval(function(){
    
    if (i ==! citys.length) {
      weather(citys[i]);
      i++;
    } else {
      weather(citys[i]);
      i = 0;
    }

  }, 4700);      
});