import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/nabajit-ghosh" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
  