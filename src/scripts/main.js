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




document.addEventListener('DOMContentLoaded', function () { 
  function updateScrollMargin() {
    const header = document.getElementById('header');
    
    if (!header) {
      console.error("Header not found!");
      return;
    }

    const headerHeight = header.offsetHeight;
    const sections = document.querySelectorAll('.regular-section');

    sections.forEach(section => {
      section.style.setProperty('scroll-margin-top', `${headerHeight}px`, 'important');
    });
  }

  updateScrollMargin();

  window.addEventListener('resize', updateScrollMargin);

  const header = document.getElementById('header');
  if (header) {
    const resizeObserver = new ResizeObserver(() => {
      updateScrollMargin();
    });
    resizeObserver.observe(header);
  } else {
    console.error("Header element not found during ResizeObserver setup");
  }
});





function midnight() {
  var element = document.body;
  element.classList.toggle("midnight");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}