const apikey = "8025f76f91042ccf362f8221da2a0563";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
  });

  async function getWeatherData(cityValue) {
    const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=&{apikey}&units=metric'
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
  }
