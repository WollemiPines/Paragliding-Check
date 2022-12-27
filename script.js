// TO DO: Define Variables
let ApiKey = '770c17c22dff37637fc3801ca2553323';
let lat = '-43.022219';
let lon = '147.925758';
let temp = $('#temp');
let windSpeed =$('#windSpeed');
let windGusts =$('#windGusts');
let windDeg =$('#windDeg');
// Fuction to Change m/s to Knots
function ms_kts(ms){
ms=1.9438*ms;
return ms
}
// Function to change Deg to cardinal points

// Querying the URL
let QueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&appid=" + ApiKey + "&units=metric";
fetch(QueryURL)
.then(function (response) {
    return response.json();
  })

.then(function (data) {
   
console.log(data)
// Insert current temp data into apporpriate ID's
temp.html(data.current.temp + " celcius");

let WINDSPEED = ms_kts(data.current.wind_speed);
let WINDGUST = ms_kts(data.current.wind_gust);
let WINDDEG = ms_kts(data.current.wind_deg);

windSpeed.html(WINDSPEED + " m/s");
windGusts.html(WINDGUST + " m/s");
windDeg.html(WINDDEG + " m/s");
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