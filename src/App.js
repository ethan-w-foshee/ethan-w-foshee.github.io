import './styles/nav-styles.css'
import './App.css';
import { Header , Footer } from './components/Header.js';

function App() {
  return (
    <body>
      <Header/>
      <main>
        <img src="./image/Landing Page Me.jpg" id="profile-pic" alt="Head shot of Me"></img>
        <div class="frosted">
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
        <button id="portfolio"><a href="https://github.com/ethan-w-foshee">Portfolio</a></button>
      </main>
      <script src="/Web101-Foshee/scripts/nav-bar.js"></script>
      <Footer/>
    </body>
  );
}

export default App;
