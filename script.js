const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  const root = document.documentElement;

  if (root.style.getPropertyValue("--bg-color") === "#f1f1f1") {
    // Color properties for dark mode
    root.style.setProperty("--primary-color", "#000000");
    root.style.setProperty("--secondary-color", "#36454f");
    root.style.setProperty("--accent", "#bf3eff");
    root.style.setProperty("--text-color", "#FFFFFF");
    root.style.setProperty("--bg-color", "#1F1F1F");
    root.style.setProperty("--bg-color-2", "#2B2B2B");
    root.style.setProperty("--bg-color-3", "#383838");
    root.style.setProperty("--bg-color-4", "#4B4B4B");
    root.style.setProperty("--bg-color-5", "#5C5C5C");
    root.style.setProperty("--nav-text-color", "var(--nav-text-color-dark)");
    darkModeToggle.textContent = "Light Mode";
  } else {
    // Color properties for light mode
    root.style.setProperty("--primary-color", "#2980B9");
    root.style.setProperty("--secondary-color", "#99cfe3");
    root.style.setProperty("--accent", "#5c2b70");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--bg-color-2", "#fff");
    root.style.setProperty("--bg-color-3", "#fff");
    root.style.setProperty("--bg-color-4", "#fff");
    root.style.setProperty("--bg-color-5", "#fff");
    root.style.setProperty("--nav-text-color", "var(--nav-text-color-light)");
    darkModeToggle.textContent = "Dark Mode";
  }
  document.body.style.background = root.style.getPropertyValue("--bg-color");
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // API endpoint
    const apiUrl =
      "https://script.google.com/macros/s/AKfycbwaUsiWgl-2UPmaAwToSLm-TveJI7j-PgZkDX8aXZbXdsXfnBFRs2PH6sssmrXlGOIy/exec";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Your message has been sent successfully.");
          document.getElementById("contact-form").reset();
        } else {
          alert("There was an error sending your message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      });
  });

// Navigation bar buttons highlighted when on section

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Menu icon in navigation bar //

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .home-image", { origin: "top" });
ScrollReveal().reveal(".heading, .about-image", { origin: "left" });
ScrollReveal().reveal(
  ".tech-stack, .project, .contact-container, .about-content",
  { origin: "right" }
);

// Typed title

const typed = new Typed(".typed-strings ", {
  strings: [
    "Software Engineer. ",
    "Developer. ",
    "Programmer. ",
    "Gamer. ",
    "Creator. ",
    "Fashionista. ",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});
