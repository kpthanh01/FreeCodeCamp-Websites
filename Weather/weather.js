$(document).ready(function(){
	var ftemp;
	var ctemp;
	var long;
	var lat;
	$.getJSON('http://ip-api.com/json',function(data2){
		lat = data2.lat;
		long = data2.lon;

		var openAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b73dd73b31800feb6e0aacf1c5b39a60';

		$.getJSON(openAPI, function(data){
			var weatherType = data.weather[0].description;
			var ktemp = data.main.temp;
			var city = data.name;
			var windSpeed = data.wind.speed;
			var tempSwitch = true;

			ftemp = ((ktemp)*(9/5)-459.67).toFixed(2);
			ctemp = (ktemp - 273).toFixed(2);

			$('#city').html(city);
			$('#temp').html(ftemp + ' F');
			$('#temp').click(function(){
				if (tempSwitch === false){
					$('#temp').html(ftemp + ' F');
					tempSwitch = true;
				} else {
					$('#temp').html(ctemp + ' C');
					tempSwitch = false;
				}
			});
			$('#weather').html(weatherType);
			$('#windspeed').html(windSpeed);
		});
	});
});
