// Navbar Component
class TNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header id="navbar">
        <div class="container">
            <a href="index.html" style="text-decoration: none;">
                <h1 class="logo">
                    <img src="../img/SKUDL.png" alt="SKUDL: ROTC Precision Training" class="logo-img">
                    SKUDL CAT/ROTC
                </h1>
            </a>
            <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <nav id="main-nav">
                <a href="#">Home</a>
                <a href="#">Commands & Drills</a>
                <a href="#">Activities</a>
                <a href="#">The SKUDL</a>
            </nav>
        </div>
    </header>
    `;

    // sticky nav
    const navbar = this.querySelector("#navbar");
    const sticky = navbar.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // mobile toggle
    const menuToggle = this.querySelector("#menu-toggle");
    const nav = this.querySelector("#main-nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });
    }
}
customElements.define('t-navbar', TNavbar);        