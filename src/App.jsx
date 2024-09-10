import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Product from './components/Product';
import Carts from './components/Carts';
import Plants from './components/Plants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </Router>
  );
}

export default App;

