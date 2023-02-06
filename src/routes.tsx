import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Navigation from './components/Navigation';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function AppRouter() {
 return(
  <Router>
   <Navigation />

   <Routes>
    
    <Route path="/" element={<Home />} />

    <Route path="/sobre" element={<About />} />

    <Route path="/projetos" element={<Projects />} />

    <Route path="/contato" element={<Contact />} />

   </Routes>

   <Footer />
  </Router>
 );
}