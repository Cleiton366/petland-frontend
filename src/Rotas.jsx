import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Search from './Components/Pages/Search/Search';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
(
  <div>
    <Link to="/search/cat">Go to search</Link>
  </div>
)
        }
        />
        <Route path="/search/:animalType" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default Rotas;
