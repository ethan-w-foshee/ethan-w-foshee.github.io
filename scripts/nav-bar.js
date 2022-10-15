let openNav = () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("open")

    let button = document.getElementById("tapBox")
    button.classList.toggle("tapBoxOpen")
    
    let grayboxbutton = document.getElementById("graybox")
    grayboxbutton.classList.toggle("grayboxOpen")
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <a href="../index.html" id="logo"><img
                    src="/Web101-Foshee/image/Home Logo.png"
                    alt="floating space pirate"></a>
            <a id="has-border-darker" class="navButton" href="/Web101-Foshee/pages/resume.html">Resume</a>
            <a id="has-border-dark" class="navButton" href="/Web101-Foshee/pages/portfolio.html">Portfolio</a>
            <a id="has-border-lighter" class="navButton" href="https://medium.com/@ethan.w.foshee">My Blog</a>
            <a id="has-border-light" class="navButton" href="/Web101-Foshee/pages/contact.html">Contact Me</a>
        </nav>
        <div id="graybox"></div>
        <div id="tapBox" onclick="openNav()"></div>
        </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-socials">
                Different Socials:
                <a href="https://linkedin.com/in/ethan-foshee/">LinkedIn</a>
                <a href="https://www.instagram.com/foshinithemagician/">Instagram</a>
                <a href="https://www.facebook.com/ethan.foshee.90/">Facebook</a>
                <a href="https://discord.gg/ZdzznMQ">Discord Server</a>
            </div>
        </footer>
        `
    }
}

customElements.define('main-header', Header)
customElements.define('main-footer', Footer)