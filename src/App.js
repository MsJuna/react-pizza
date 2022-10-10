import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'
import NoFound from './pages/NoFound';
import Basket from './pages/Basket';

import './scss/app.scss';

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
