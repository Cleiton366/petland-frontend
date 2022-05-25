import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Index from './Components/Pages/Index/Index';
import UserProfile from './Components/Pages/User Profile/UserProfile';
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
      <Routes>
        <Route exact path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
export default Rotas;
