// script.js
// Toggle hamburger menu
function toggleMenu() {
  var menu = document.getElementById("nav-menu");

  if (menu) {
    menu.classList.toggle("active");
  } else {
    console.log("nav-menu not found");
  }
}

// Toggle hidden content (About page, etc.)
function toggleContent() {
  var content = document.getElementById("extra-info");

  if (content) {
    content.classList.toggle("hidden");
  } else {
    console.log("extra-info not found");
  }
}

