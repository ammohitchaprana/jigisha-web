// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Process from './components/Process';
import Doctors from './components/Doctors';
import Cities from './components/Cities';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import FloatingElements from './components/FloatingElements';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Mission />
        <Process />
        <Doctors />
        <Cities />
        <Gallery />
        <Donate />
        <FloatingElements />
        <Footer />
      </div>
    </Router>
  );
}

export default App;