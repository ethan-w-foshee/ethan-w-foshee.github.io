import React from 'react'
import Router from './Router.js';
import { HashRouter } from 'react-router-dom';
import { Header, Footer } from './components/Header.js';
import './App.css'

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Router />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
