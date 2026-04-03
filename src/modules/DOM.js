// DOM.js
// Handles DOM manipulation

//Imports

console.log("DOM.js working");

// ----------------------------------------------------------
// Collect DOM Elements
const weatherData = document.querySelector(".weatherData");
const goBtn = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");

//function submitSearch - to send input value to api fetch function
function submitSearch() {
  goBtn.addEventListener("click", () => {
    console.log(`goBtn clicked...`);
    const searchTerm = searchInput.value || "London, UK";
    console.log(`searchTerm saved as: ${searchTerm}`);
    //fetchAPI()
  });
}

export { submitSearch };
