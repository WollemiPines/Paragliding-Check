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
ms= Math.round(1.9438*ms * 10) / 10
return ms
}
// Function to change Deg to cardinal points
function deg_card(deg){
    if (deg>348.75, deg<11.25){
     return "N"
    }
    if (deg>11.25, deg<33.75){
    return "NNE"
    }
    if (deg>33.75, deg<56.25){
    return "NE"
    }
    if (deg>56.25, deg<78.75){
    return "ENE"
    }
    if (deg>78.75, deg<101.25){
    return "E"
    }
    if (deg>101.25, deg<123.75){
    return "ESE"
    }
    if (deg>123.75, deg<146.25){
    return "SE"
    }
    if (deg>146.25, deg<168.75){
    return "SSE"
    }
    if (deg>168.75, deg<191.25){
    return "S"
    }
    if (deg>191.25, deg<213.75){
    return "SSW"
    }
    if (deg>213.75, deg<236.25){
    return "SW"
    }
    if (deg>236.25, deg<258.75){
    return "WSW"
    }
    if (deg>258.75, deg<281.25){
    return "W"
    }
    if (deg>281.25, deg<303.75){
    return "WNW"
    }
    if (deg>303.75, deg<326.25){
    return "NW"
    }
    if (deg>326.25, deg<348.75){
    return "NNW"
    }
}

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
let WINDDEG = deg_card(data.current.wind_deg);

windSpeed.html(WINDSPEED + " Kts");
windGusts.html(WINDGUST + " Kts");
windDeg.html(WINDDEG );
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