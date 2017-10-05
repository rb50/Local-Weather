window.onload = function (){
  let x = document.getElementById("weathertext");
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

  }
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(position);
        console.log(xhr);

        if (xhr.readyState == 4 && xhr.status == 200) {
          var weatherObj = JSON.parse(xhr.responseText);
          document.getElementById("weathertext").innerHTML =
          weatherObj.weather[0].description;
        }
    };

    xhr.open("GET", 'https://fcc-weather-api.glitch.me/api/current?lat='+ position.coords.latitude+'&lon='+position.coords.longitude, true);
    xhr.send();
  }
  getLocation();


}
