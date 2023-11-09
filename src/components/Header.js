import { Link, useNavigate } from 'react-router-dom'
// import '../styles/nav-styles.css'

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                <Link to="/" id="logo"><img
                    src="../image/Home Logo.png"
                    alt="floating space pirate"></img></Link>
                <Link to="/Resume" id="has-border-darker" class="navButton">Resume</Link>
                <Link to="/Portfolio" id="has-border-dark" class="navButton">Portfolio</Link>
                <a id="has-border-lighter" class="navButton" href="https://medium.com/@ethan.w.foshee">My Blog</a>
                <Link to="/Contact" id="has-border-light" class="navButton">Contact Me</Link>
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