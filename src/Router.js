import React from 'react';
import { Routes, Route } from 'react-router';

// Pages to import
import Contact from './pages/Contact'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

const Router = () => {
    return(
        <Routes>
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
        </Routes>
    )
}

export default Router;