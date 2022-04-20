import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  </Router>
);
