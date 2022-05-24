import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Pages/Search/Search';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default Rotas;