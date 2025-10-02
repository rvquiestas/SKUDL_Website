// CAT Benefits Carousel Arrow Scroll
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.cat-benefits-grid');
  const leftBtn = document.querySelector('.cat-carousel-arrow.left');
  const rightBtn = document.querySelector('.cat-carousel-arrow.right');
  if (grid && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', function () {
      grid.scrollBy({ left: -320, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', function () {
      grid.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
});
// Function to handle the sticky navigation bar effect
window.onscroll = function () {
  stickyNav();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// 2. PARALLAX EFFECT (NEW)
const hero = document.getElementById('hero');

function applyParallax() {
  if (hero) {
    // Get the current vertical scroll position
    const scrolled = window.scrollY;
    const newY = -(scrolled * 0.5);
    hero.style.backgroundPositionY = `${newY}px`;
  }
}

// Hero text float-in animation (one by one)
window.addEventListener('DOMContentLoaded', function () {
  var heroContainer = document.querySelector('#hero .container');
  if (heroContainer) {
    setTimeout(function () {
      heroContainer.classList.add('hero-visible');
    }, 200); // slight delay for effect
  }
});

// Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const nav = document.getElementById('main-nav');
            menuToggle.addEventListener('click', function () {
                nav.classList.toggle('open');
                menuToggle.classList.toggle('open');
            });
        });