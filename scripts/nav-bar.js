let openNav = () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("open")

    let button = document.getElementById("tapBox")
    button.classList.toggle("tapBoxOpen")
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <a href="../index.html" id="logo"><img
                    src="../image/Home Logo.png"
                    alt="austin coding academy logo"></a>
            <a id="has-border-darker" class="navButton" href="../pages/resume.html">Resume</a>
            <a id="has-border-dark" class="navButton" href="../pages/about.html">Portfolio</a>
            <a id="has-border-lighter" class="navButton" href="https://medium.com/@ethan.w.foshee">My Blog</a>
            <a id="has-border-light" class="navButton" href="../pages/contact.html">Contact Me</a>
        </nav>
        <div id="tapBox" onclick="openNav()"></div>
        </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <a class="small-text" href="https://austincodingacademy.com/">© Austin Coding Academy</a>
        </footer>
        `
    }
}

customElements.define('main-header', Header)
customElements.define('main-footer', Footer)