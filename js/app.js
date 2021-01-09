// Initialise AOS library
AOS.init();

// Get the current year for the Footer
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
