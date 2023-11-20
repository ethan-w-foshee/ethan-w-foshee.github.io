import discord from '../image/CC Black Outlined.png'
import gmail from '../image/Gmail-logo.png'
import facebook from '../image/Facebook-logo.png'
import linkedIn from '../image/LinkedIn-logo.png'
import insta from "../image/Instagram-Logo.png"
import '../styles/contact-styles.css'

function Contact() {
    return (
        <body id='contact-body'> <br/>
            <main id="contact-main">
                <h1>Reach Out to Me!</h1>
                <div class="contact-frosted">
                    <ol class="contact-socials">
                        <li id="discord">My Discord Server<br />
                            <span class="sub-social"><a href="https://discord.gg/ZdzznMQ" target="_blank" rel='noreferrer'>
                                <img src={discord} alt='discord logo' /></a></span>
                        </li>
                        <li id="gmail">Email<br />
                            <span class="sub-social"><a href="mailto:ethan.w.foshee@gmail.com" target="_blank" rel='noreferrer'>
                                <img src={gmail} alt='gmail logo'/></a></span>
                        </li>
                        <li id="facebook">Facebook<br />
                            <span class="sub-social"><a href="https://www.facebook.com/ethan.foshee.90/" target="_blank" rel='noreferrer'>
                                <img src={facebook} alt='facebook logo' /></a></span>
                        </li>
                        <li id="linkedin">LinkedIn<br />
                            <span class="sub-social"><a href="https://www.linkedin.com/in/ethan-foshee/" target="_blank" rel='noreferrer'>
                                <img src={linkedIn} alt='linkedIn logo'/></a></span>
                        </li>
                        <li id="instagram">Instagram<br />
                            <span class="sub-social"><a href="https://www.instagram.com/foshinithemagician/" target="_blank" rel='noreferrer'>
                                <img src={insta} alt='instagram logo'/></a></span>
                        </li>
                    </ol>
                </div>
            </main>
        </body>
    )
}

export default Contact;