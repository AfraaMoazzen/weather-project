let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase();

if (weather[city]) {
  let temp = Math.round(weather[city].temp);
  alert(
    `It is currently${temp} in ${city} with a humidity of ${weather[city].humidity}`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
let now = new Date();
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let day = now.getDay();
let hours = now.getHours();
let formatDate = `  ${days[now.getDay()]}, ${hours}:${now.getMinutes()}`;
document.getElementById("time").innerHTML = formatDate;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "e311466543239e877123db16ab774656";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h3 = document.querySelector("h3");
  h3.innerHTML = message;
}
