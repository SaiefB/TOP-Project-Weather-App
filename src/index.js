//index.js
// Entry point for the application

import "./styles.css";

import { submitSearch } from "./modules/DOM";

console.log("index.js working");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  submitSearch();
});
