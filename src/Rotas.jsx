import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Index from './Components/Pages/Index/Index';
import Search from './Components/Pages/Search/Search';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Home" element={<Home />} />
        <Route
          exact
          path="/backroute"
          element={
(
  <div>
    <Link to="/search/cat/everywhere">Go to search</Link>
  </div>
)
        }
        />
        <Route path="/search/:animalType/:searchLocation" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default Rotas;
