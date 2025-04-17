const toggleBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

const links = mobileMenu.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

