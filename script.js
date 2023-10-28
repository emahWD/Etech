// Function to toggle the mobile menu
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add an event listener to the menu button
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);


// Optional JavaScript for hiding the preloader after a certain time (e.g., 3 seconds).
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const preloader = document.querySelector(".preloader");
      preloader.style.display = "none";
    }, 5000); // Hide the preloader after 3 seconds
  });
  
