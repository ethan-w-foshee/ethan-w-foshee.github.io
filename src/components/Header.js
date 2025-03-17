import { Link } from 'react-router-dom'
import { Icon } from '@mui/material';
import '../styles/nav-styles.css'
// import logo from '../image/Home Logo.png'
import logo from '@mui/icons-material/House';

function Header() {
    return (
        <header id='navHeader'>
            <nav>
                <Link to="/" id="logo"><Icon id="logoAgain"
                    component={logo}
                    sx={{fontSize:50}}
                    ></Icon></Link>
                <Link to="/Resume" id="has-border-darker" class="navButton">Resume</Link>
                <Link to="/Portfolio" id="has-border-dark" class="navButton">Portfolio</Link>
                <a id="has-border-lighter" class="navButton" href="https://blog.starzlinger.cc">My Blog</a>
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
                <span class='foot-social'><a href="https://linkedin.com/in/ethan-foshee/">LinkedIn</a></span>
                <span class='foot-social'><a href="https://www.instagram.com/foshinithemagician/">Instagram</a></span>
                <span class='foot-social'><a href="https://www.facebook.com/ethan.foshee.90/">Facebook</a></span>
                <span class='foot-social' id='foot-discord-social'><a href="https://discord.gg/ZdzznMQ">Discord Server</a></span>
            </div>
        </footer>
    )
}

export { Header , Footer }