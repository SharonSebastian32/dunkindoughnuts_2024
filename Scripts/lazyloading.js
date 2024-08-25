document.addEventListener("DOMContentLoaded", function () {
  // Hide the loading animation when the DOM is fully loaded
  document.getElementById("loading-animation").style.display = "none";
});

// Show the loading animation immediately when the page starts loading
window.addEventListener("beforeunload", function () {
  document.getElementById("loading-animation").style.display = "flex";
});
