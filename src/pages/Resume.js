import '../styles/resume-styles.css'
import profphoto from '../image/Professional Photo.jpg'

function Resume() {
    return (
        <body id='resumebody'>
            <main id='resumemain'>
                <div class="top-content">
                    <div class="main-info">
                        <img src={profphoto} id="professional-img" alt="A professional looking man" />
                        <div class="social-info">
                            <h1 class="name">Ethan Foshee</h1>
                            <ul class="socials">
                                <li class="location">
                                    <span>Texas</span>
                                </li>
                                <li class="email">
                                    <span>Email:</span>
                                    <br />
                                    <a href="mailto:ethan.w.foshee@gmail.com"
                                        title="My Professional Email">ethan.w.foshee@gmail.com
                                    </a>
                                </li>
                                <li class="phone">
                                    <span>Cell Phone:</span>
                                    <br />
                                    <a href='./#/Resume'>On Request</a>
                                </li>
                                <li class="linkedin">
                                    <span>LinkedIn Profile:</span>
                                    <br />
                                    <a class="linkedin"
                                        href="https://linkedin.com/in/ethan-foshee/">linkedin.com/in/ethan-foshee/</a>
                                </li>
                                <li class="github">
                                    <span>GitHub Profile:</span>
                                    <br />
                                    <a href="https://github.com/ethan-w-foshee">github.com/ethan-w-foshee</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bottom-content">
                    <div class="left-resume">
                        <div class="job" id="bottom-header">
                            <h1>Experiences</h1>
                            <ul>
                                <li id="chapdesk-header" class="key-header">LCU's Chapdesk
                                    <ul>
                                        <li><i>Worked for from August 2018 to September 2020 </i>| On College Campus</li>
                                        <li>Lead shifts</li>
                                        <li>Required fixing of hardware and software issues</li>
                                    </ul>
                                </li>
                                <li id="protech-header" class="key-header">Pro Tech Audio Visual Security
                                    <ul>
                                        <li><i>Worked for from April 2021 to May 2022 </i>| In Person</li>
                                        <li>Installed and Programmed Smart Home Systems</li>
                                        <li>Installed Camera and Security Systems</li>
                                    </ul>
                                </li>
                                <li id="lawnstarter-header" class="key-header">LawnStarter Fullstack Developer Intern
                                    <ul>
                                        <li><i>Worked from May 2023 to October 2023</i> | Remote Work</li>
                                        <li>Worked on a team with 9 other individuals</li>
                                        <li>Also worked on my own project by myself</li>
                                        <li>Optimized customer dispute flow</li>
                                    </ul>
                                </li>
                                <li id="edugen-header" class="key-header">EDUGEN Framework Developer
                                    <ul>
                                        <li><i>Developed from February 2024 to March 2024</i> | Remote Work</li>
                                        <li>EDUGEN was created to help create curriculums for people to teach</li>
                                        <li>Worked on a team with 4 other individuals</li>
                                        <li>Created a framework which consisted of</li>
                                        <ul>
                                            <li>Vite and Tailwind</li>
                                            <li>MongoDB</li>
                                            <li>OpenAI</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li id="aca-mentor" class="key-header">Austin Coding Academy Mentor
                                    <ul>
                                        <li><i>Ongoing, started in August 2024</i> | Remote Work</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="edu" id="bottom-header">
                            <h1>Education</h1>
                            <p>
                                <ul>
                                    <li id="uni-header" class="key-header">Lubbock Christian University
                                        <ul>
                                            <li><i>Attended August 2018 to May 2021</i> | Lubbock Texas</li>
                                            <li>
                                                Studied Information Systems and Technologies
                                                <ul>
                                                    <li>Networking</li>
                                                    <li>Software</li>
                                                    <li>Hardware</li>
                                                    <li>Basic Programming</li>
                                                </ul>
                                            </li>
                                            <li>Helped created ESports team</li>
                                            <li>Led LCU's Students of Business</li>
                                        </ul>
                                    </li>
                                    <li id="aca-header" class="key-header">Austin Coding Academy
                                        <ul>
                                            <li><i>Attended July 2022 to July of 2023 </i>| Online</li>
                                            <li>Learned HTML, CSS, JavaScript, ReactJS, NodeJS, SQL, and more!</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="right-resume">
                        <div class="skills" id="bottom-header">
                            <h1>About Me</h1>
                            I have no clue what to put here
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Resume