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
          <h3 id="tagline">A full-stack developer diving into the world of technology with enthusiasm and a drive for learning.</h3>
          <p id="about-me">
            With a foundation in coding and a hunger for challenges, I'm committed to honing my skills and delivering quality results. 
            My journey into the realm of development started with a genuine curiosity, and since then, 
            I've been on a quest to master the craft, thriving on problem-solving and creative solutions. 
            Every project I take on is an opportunity for growth and innovation, 
            where I leverage dedication, perseverance, and a willingness to explore new technologies. 
            Beyond coding, I'm always seeking avenues for personal and professional growth, 
            whether it's through tech workshops or pursuing hobbies like photography. 
            I'm excited to connect with fellow developers, collaborators, and tech enthusiasts, 
            so feel free to reach out—I'm always open to new connections and opportunities!
          </p>
        </div>
      </main>
    </body>
  )
}

export default Home