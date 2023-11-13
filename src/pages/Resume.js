import '../styles/resume-styles.css'
import '../image/Professional Photo.jpg'

function Resume() {
    return (
        <body id='resumebody'>
            <main id='resumemain'>
                <div class="top-content">
                    <div class="main-info">
                        <img src="../image/Professional Photo.jpg" id="professional-img" alt="A professional looking man" />
                        <div class="social-info">
                            <h1 class="name">Ethan Foshee</h1>
                            <ul class="socials">
                                <li class="location">
                                    <span>Lubbock, Texas</span>
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
                                    <a href="tel:806-778-3654">(806)778-3654</a>
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
                        <div class="edu">
                            <h1>Education</h1>
                            <p>
                                <ul>
                                    <li id="highschool-header" class="key-header">
                                        Southcrest Christian Highschool
                                        <ul>
                                            <li><i>Graduated Class May 25th of 2018 | Lubbock, Texas</i></li>
                                            <li>Graduated 4th in Class</li>
                                            <li>Above a 4.0 GPA</li>
                                            <li>Participated in many extracurricular activites
                                                <ul>
                                                    <li>First Chair Trumpet</li>
                                                    <li>Lead Robotics Team to 1st place my sophomore year</li>
                                                    <li>Team Captain for Robotics my senior year</li>
                                                    <li>Participated in Golf 3 years</li>
                                                    <li>Participated in Track my senior year</li>
                                                </ul>
                                            </li>
                                            <li>School Chaplin</li>
                                            <li>Managed Audio/Visual for School Chapels my Junior and Senior years</li>
                                        </ul>
                                    </li>
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
                                            <li><i>Attended July 2022 to June of 2023 [Expected] </i>| Online</li>
                                            <li>Learned HTML, CSS, and JavaScript</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div class="job">
                            <h1>Jobs</h1>
                            <ul>
                                <li id="chapdesk-header" class="key-header">LCU's Chapdesk
                                    <ul>
                                        <li><i>Worked for from August 2018 to September 2020 </i>| On College Campus</li>
                                        <li>Was a shift lead</li>
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
                            </ul>
                        </div>
                    </div>
                    <div class="right-resume">
                        <div class="skills">
                            <h1>Skills</h1>
                            I have no clue what to put here
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Resume