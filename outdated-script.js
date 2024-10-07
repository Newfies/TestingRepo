"use strict"; // Enables strict mode, making the file behave more like a module.

import('up-to-date-script.js')  // assuming this is correct relative path
  .then(module => {
    // The module is loaded, and all exports are available
  })
  .catch(err => {
    console.error('Failed to load x/e/apple.js:', err);
  });

const four = document.getElementById("4");

four.addEventListener("click", function(){
    alertsystem(); // This should be available from the imported module
});
