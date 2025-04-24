// Mobile Menu doohickeys

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



// Section Scroll Margin fixes

document.addEventListener('DOMContentLoaded', function () { 
  function updateScrollMargin() {
    const header = document.getElementById('header');
    
    if (!header) {
      console.error("Header not found bruh");
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
    console.error("Header element not found bruh");
  }
});



// Themes

function lightMode() {
  document.body.classList.remove("dark-mode", "midnight");
}

function darkMode() {
  document.body.classList.remove("midnight");
  document.body.classList.add("dark-mode");
}

function midnight() {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("midnight");
}




// Mobile Theme Dropdown Mneu

const themeButton = document.getElementById('theme-drop-button');
const themes = document.getElementById('themes');

themeButton.addEventListener('click', function() {
    themes.classList.toggle('show-dropdown');
});
