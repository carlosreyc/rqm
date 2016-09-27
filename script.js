$(document).ready(function(){

  $.getJSON('http://ipinfo.io', function(data){
    var coords = data.loc.split(',');
    var tempK = 0;
    var tempC = 0;
    console.log(coords)
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+coords[0]+'&lon='+coords[1]+'&APPID=d727f82db95a90f0f8909e62320acf9b&',function(json){
      tempK = json.main.temp - 273.15;
      tempC = Math.round( tempK * 10 ) / 10;
      console.log(json);
      console.log(tempC);
      $("div.city").html(json.name +","+ json.sys.country);
      $("div.weather").html(json.weather[0].description);
      $("div.temp").html(tempC + 'C°');

    });
  });


});
