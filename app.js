document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const search = document.querySelector(".search");
  const celsius = document.querySelector(".celsius");
  const minCelsius = document.querySelector(".min-bold");
  const maxCelsius = document.querySelector(".max-bold");
  const cityName = document.querySelector(".city-name");
  const humidity = document.querySelector(".humidity");
  const pressure = document.querySelector(".pressure");
  const seaLevel = document.querySelector(".sea-level");

  async function getWeatherData(city) {
    // API key
    const apiKey = "a1777393767d0b6a7e9652fbdf69be21";
    // url where the request goes
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      // fetching weather data
      const response = await fetch(apiUrl);
      // checking response status
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log(data);
        displayWeatherData(data);
      }
    } catch (error) {
      console.error("There was a problem with fetch operation: ", error);
    }
  }

  function displayWeatherData(data) {
    celsius.innerText = `${data.main.temp}°C`;
    minCelsius.innerText = `${data.main.temp_min}°C`;
    maxCelsius.innerText = `${data.main.temp_max}°C`;
    cityName.innerText = `${data.name}`;
    humidity.append(`${data.main.humidity}% RH`);
    pressure.append(`${data.main.pressure} hPa`);
    seaLevel.append(`${data.main.sea_level} hPa`);
  }

  searchBtn.addEventListener("click", () => {
    if (search.value != "") {
      let cityName = search.value;
      console.log(cityName);
      getWeatherData(cityName);
    } else {
      alert("Enter a city name!");
    }
  });
});
