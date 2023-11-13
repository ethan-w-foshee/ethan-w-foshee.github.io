import React from 'react'
import landingPageMe from '../image/Landing Page Me.jpg'
import '../styles/home-styles.css';

function Home() {
  return (
    <body id='homebody'>
      <main id="homemain">
        <img src={landingPageMe} id="profile-pic" alt="Head shot of Ethan"></img>
        <div class="main-frosted">
          <h1 id="name">
            Ethan W Foshee
          </h1>
          <h2 id="title">
            Freelance Web Developer
          </h2>
          <p id="about-me">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </body>
  )
}

export default Home