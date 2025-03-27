import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Appointment from './components/Appointment';
import './App.css';

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
              </>
            }
          />
          <Route path="/appointment" element={<Appointment />} />

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