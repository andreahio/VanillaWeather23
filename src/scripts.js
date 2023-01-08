function displayTemperature(response) {
let temperatureElement= document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round (response.data.main.temp);
}

let apiKey= "9e30b534bf5fe13f955b2b8fa22fe5a6";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);