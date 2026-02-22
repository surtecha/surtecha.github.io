// Theme
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const stored = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", stored);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Scroll-reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

reveals.forEach((el) => observer.observe(el));

// Active nav on scroll
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");

const activateNav = () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navAs.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", activateNav, { passive: true });
activateNav();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
