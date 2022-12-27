// TO DO: Define Variables
let ApiKey = '770c17c22dff37637fc3801ca2553323';
let lat = '-43.022219';
let lon = '147.925758';
let temp;
let wind;
// TO DO: 

let QueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&appid=" + ApiKey + "&units=metric";
fetch(QueryURL)
.then(function (response) {
    return response.json();
  })

.then(function (data) {
   

// Insert current temp data into apporpriate ID's
temp.html(data.current.temp + " celcius")
wind.html(data.current.wind_speed + " m/s");
// humidity.html(data.current.humidity + " %")
// uvIndex.html(data.daily[0].uvi)

// Pulls data from the daily querry and inserts into the #future_... ID tags
for(let i=0; i<=6; i++){
    $('#future_temp'+i).html(data.daily[i].temp.day + " celcius")
    $('#future_wind'+i).html(data.daily[i].wind_speed + " m/s")
//     $('#future_humidity'+i).html(data.daily[i].humidity + " %")
//     $('#future_uvI'+i).html(data.daily[i].uvi)
//     uvColorClass();
//     $('#icon'+i).html(data.daily[i].weather[0].icon)
//     iconFill();
     }
    })
// TO DO: 
// TO DO: 
// TO DO: 
// TO DO: 
// TO DO: 
// TO DO: 