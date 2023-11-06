function Header() {
    return (
        <header>
            <nav>
                <a href="../index.html" id="logo"><img
                    src="../image/Home Logo.png"
                    alt="floating space pirate"></img></a>
                <a id="has-border-darker" class="navButton" href="/Web101-Foshee/pages/resume.html">Resume</a>
                <a id="has-border-dark" class="navButton" href="/Web101-Foshee/pages/portfolio.html">Portfolio</a>
                <a id="has-border-lighter" class="navButton" href="https://medium.com/@ethan.w.foshee">My Blog</a>
                <a id="has-border-light" class="navButton" href="/Web101-Foshee/pages/contact.html">Contact Me</a>
            </nav>
            <div id="graybox"></div>
            <div id="tapBox" onclick="openNav()"></div>
        </header>
    )
}

function Footer() {
    return(
        <footer>
            <div class="footer-socials">
                Different Socials:
                <a href="https://linkedin.com/in/ethan-foshee/">LinkedIn</a>
                <a href="https://www.instagram.com/foshinithemagician/">Instagram</a>
                <a href="https://www.facebook.com/ethan.foshee.90/">Facebook</a>
                <a href="https://discord.gg/ZdzznMQ">Discord Server</a>
            </div>
        </footer>
    )
}

export { Header , Footer }