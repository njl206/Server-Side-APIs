var todaysDate = moment().format("");
var searchArray = []; 

function searchCities (cityName){
   var apiKey = "3137eac539dd97ab938f66925bda6905";

   $.ajax({
       url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",US&units=imperial&APPID=3137eac539dd97ab938f66925bda6905", 
       method: "GET", 
   }).then(function(response){
       console.log(response);
       var imageCode = response.weather[0].icon;
       var imageUrl = "https://openweathermap.org/img/w/" + imageCode + ".png";

       $("#weatherImage").attr ("src", imageUrl);
       $("#enteredCity").html(response.name + "(' + todaysDate + ')");
       $("#temperature").text("Temperature: " + response.main.temp);
       $("#humidity").text("Humidity: " + response.main.humidity);
       $("#windspeed").text("Windspeed: " + response.wind.speed);
       $(".card-header").text(cityName);

       var latitude = response.coord.latitude;
       var longitude = response.coord.longe;

 
})
searchCities("boston")