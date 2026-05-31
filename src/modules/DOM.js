// DOM.js
// Handles DOM manipulation

//Imports
import { fetchWeatherData } from "./api";

console.log("DOM.js working");

// ----------------------------------------------------------
// Collect DOM Elements
const weatherData = document.querySelector(".weatherData");
const goBtn = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");

//function submitSearch - to send input value to api fetch function
function submitSearch() {
  goBtn.addEventListener("click", async () => {
    console.log("goBtn clicked and input value is: ", searchInput.value);
    const searchTerm = searchInput.value || "London, UK";
    console.log(`searchTerm saved as: ${searchTerm}`);
    const data = await fetchWeatherData(searchTerm);
    //update the DOM here
    weatherData.textContent = data.currentConditions.temp;
  });
}

export { submitSearch };
