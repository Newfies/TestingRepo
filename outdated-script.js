"use strict";

// Make sure the relative path to up-to-date-script.js is correct
import('up-to-date-script.js') // Adjust this path as needed
  .then(module => {
    // Check if alertsystem is being exported from apple.js
    if (module.alertsystem) {
      window.alertsystem = module.alertsystem; // Make it globally accessible if needed
    }
  })
  .catch(err => {
    console.error('Failed to load up-to-date-script.js:', err);
  });

const four = document.getElementById("4");

four.addEventListener("click", function(){
    if (typeof alertsystem === "function") {
        alertsystem(); // Call the alertsystem function from the imported module
    } else {
        console.error('alertsystem is not defined');
    }
});
