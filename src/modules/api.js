//api.js
// Handles all fetch calls to the weather API

// function to fetch weather data
async function fetchWeatherData(term) {
  const searchTerm = term;

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?unitGroup=uk&contentType=json&key=2HU4R9TR5QED9H8S3DP86YZB6`,
    {
      method: "GET",
      headers: {},
    },
  )
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Weather data for ${searchTerm}:`, data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

/* async function fetchWeatherData() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london,uk?unitGroup=uk&contentType=json&key=2HU4R9TR5QED9H8S3DP86YZB6",
  );
  response.json();
} */

export { fetchWeatherData };
