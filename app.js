document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const search = document.querySelector(".search");
  const celsius = document.querySelector(".celsius");

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
