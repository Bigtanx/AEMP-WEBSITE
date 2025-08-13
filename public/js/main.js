// navbar
// MENU TOGGLE FOR MOBILE
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// HANDLE ACTIVE STATE BASED ON URL
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLinkByUrl() {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });
}

// SET ACTIVE STATE ON CLICK
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active-nav"));
    this.classList.add("active-nav");
  });
});

// Initialize by URL
setActiveLinkByUrl();

//   CAROUSEL
const carousel = document.getElementById("carousel");

if (carousel) {
  let index = 0;
  const totalSlides = 3;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}vw)`;
  }, 5000);
}

// our leadreship  section
const track = document.getElementById("carousel-track");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let position = 0;

function getCardWidth() {
  const card = track.querySelector("div");
  const cardStyle = window.getComputedStyle(card);
  return (
    card.offsetWidth +
    parseFloat(cardStyle.marginLeft) +
    parseFloat(cardStyle.marginRight)
  );
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  const totalCards = track.children.length;
  const containerWidth = track.parentElement.offsetWidth;
  const visibleCards = Math.floor(containerWidth / cardWidth);
  const maxPosition = totalCards - visibleCards;

  if (position < 0) position = 0;
  if (position > maxPosition) position = maxPosition;

  track.style.transform = `translateX(-${cardWidth * position}px)`;
}

nextBtn.addEventListener("click", () => {
  position++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  position--;
  updateCarousel();
});

// Swipe Support
let startX = 0;
let isDragging = false;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  let diffX = e.touches[0].clientX - startX;
  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      position++;
    } else {
      position--;
    }
    updateCarousel();
    isDragging = false; // prevent multiple swipes in one drag
  }
});

track.addEventListener("touchend", () => {
  isDragging = false;
});

window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);

// accordion section
function toggleFlushAccordion(button) {
  const content = button.parentElement.nextElementSibling;
  const icon = button.querySelector(".toggle-icon");

  content.classList.toggle("hidden");
  icon.textContent = content.classList.contains("hidden") ? "+" : "-";
}

//dropdown
function toggleDropdown(id) {
  // Close all open dropdowns first
  document.querySelectorAll('[id^="dropdown"]').forEach((dropdown) => {
    if (dropdown.id !== id) dropdown.classList.add("hidden");
  });

  // Toggle the clicked dropdown
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}

// card
function toggleCard(button) {
  const content = button.previousElementSibling.querySelector("p");
  content.classList.toggle("hidden");
  button.textContent = content.classList.contains("hidden")
    ? "See More"
    : "See Less";
}
