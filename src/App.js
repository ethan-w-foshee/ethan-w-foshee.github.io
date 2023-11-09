import React from 'react'
import Router from './Router.js';
import { HashRouter } from 'react-router-dom';
import { Header, Footer } from './components/Header.js';

//CSS Styles
import './App.css';
import './styles/nav-styles.css'
// import './styles/portfolio-styles.css'
// import './styles/contact-styles.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  );
}

export default App;
