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


document.addEventListener('DOMContenrLoaded', function () { 
  function updateScrollMargin() {
  const header = document.getElementById('header');
  const headerHeight = header.offsetHeight;
  const sections = document.querySelectorAll('.regular-section');

  sections.forEach(section => {
    section.computedStyleMap.scrollMarginTop = '${headerHeight}px';
  });
}

updateScrollMargin();

window.addEventListener('resize', updateScrollMargin);
});

section.style.setProperty('scroll-margin-top', '${headerHeight}px', 'important');