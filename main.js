navigator.geolocation.getCurrentPosition(displayWeather)

function displayWeather(position) {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude +'&appid=524cb0ea7cf8101e8e48845dad9485d7' + '&units=Imperial')
    .then(response => {
      return response.json()
    })
    .then(data => {
      let temp = Math.round(data.main.temp)
      let description = data.weather[0].description

      document.getElementById("desc").innerHTML = "It is " + temp + " degrees today with " + description + "!"
    })
}