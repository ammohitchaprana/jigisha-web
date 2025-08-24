import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Appointment from './components/Appointment';
import FloatingElements from './components/FloatingElements';
import GalleryPage from './components/GalleryPage';
import './assets/styles/App.css';

import Layout from './admin-panel/Layout'
import Dashboard from './admin-panel/Dashboard'
import Appointments from './admin-panel/Appointments'
import ManageDoctors from './admin-panel/ManageDoctors'
import AdminLogin from './admin-panel/AdminLogin'
import { ProtectedRoute } from './admin-panel/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Cards />
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Donate />
                <FloatingElements />
                <Footer />
              </>
            }
          />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Footer />} /> */}

          <Route path="/appointment" element={<Appointment />} />
          <Route path="/gallery" element={<GalleryPage />} />

          <Route path='/admin/login' element={<AdminLogin />} />

          <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Layout title="Dashboard" />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctors" element={<ManageDoctors />} />
          </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;