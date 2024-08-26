function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//let city = document.querySelector("#search-input");
//let currentCity = city.value;

function checkWeather(response) {
  let currentWeather = Math.round(response.data.temperature.current);
  console.log(currentWeather);
  let h1 = document.querySelector("#current-temperature-value");
  h1.innerHTML = currentWeather;
}

function func() {
  let city = document.querySelector("#search-input");
  let currentCity = city.value;
  let apiKey = "da86o89f290fa6e48t8fe94b9553bb0f";
  let url = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}`;

  axios.get(url).then(checkWeather);
}

searchForm.addEventListener("submit", func);
