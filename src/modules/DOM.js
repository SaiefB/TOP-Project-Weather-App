// DOM.js
// Handles DOM manipulation

//Imports
import { fetchWeatherData } from "./api";

console.log("DOM.js working");

// ----------------------------------------------------------
// Collect DOM Elements
const weatherData = document.querySelector(".weatherData");
const condition = document.querySelector(".condition");
const location = document.querySelector(".location");
const degrees = document.querySelector(".degrees");
const goBtn = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");

//function submitSearch - to send input value to api fetch function
function submitSearch() {
  goBtn.addEventListener("click", async () => {
    console.log("goBtn clicked and input value is: ", searchInput.value);
    const searchTerm = searchInput.value || "London, UK";
    console.log(`searchTerm saved as: ${searchTerm}`);
    const data = await fetchWeatherData(searchTerm);
    console.log(`data: ${data}`);
    //update the DOM here
    condition.textContent = data.currentConditions.conditions;
    location.textContent = data.address;
    degrees.textContent = data.currentConditions.temp;
  });
}

export { submitSearch };
