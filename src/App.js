import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'
import NoFound from './pages/NoFound';
import Basket from './pages/Basket';

import './scss/app.scss';

// export const SearchContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      {/* </SearchContext.Provider> */}
    </div>
  );
}

export default App;
