function checkViewportWidth() {
  var mobileMessage = document.querySelector(".mobile-message");
  if (window.innerWidth <= 768) {
    mobileMessage.style.display = "block";
  } else {
    mobileMessage.style.display = "none";
  }
}

// Check viewport width on page load
checkViewportWidth();

// Listen for window resize event
window.addEventListener("resize", function () {
  checkViewportWidth();
});
