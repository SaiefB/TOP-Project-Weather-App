//api.js
// Handles all fetch calls to the weather API

// function to fetch weather data
async function fetchWeatherData(term) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${term}?unitGroup=uk&contentType=json&key=2HU4R9TR5QED9H8S3DP86YZB6`,
  );
  const data = await response.json();
  return data;
}

export { fetchWeatherData };
