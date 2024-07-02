document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const search = document.querySelector(".search");

  // API key
  const apiKey = "a1777393767d0b6a7e9652fbdf69be21";
  // city for getting weather data
  const city = "New York";
  // url where the request goes
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  async function getWeatherData() {
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

  getWeatherData();

  // displayWeatherData(data) {
  // }

  searchBtn.addEventListener("click", () => {
    if (search.value != "") {
      let value = search.value;
      console.log(value);
    }
  });
});
