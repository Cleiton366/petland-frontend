import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from './Components/Pages/Home/Home';
import Index from './Components/Pages/Index/Index';
import UserProfile from './Components/Pages/User Profile/UserProfile';
import Search from './Components/Pages/Search/Search';
import Donationrequest from './Components/Pages/Donationrequest/Donationrequest';
import Adopt from './Components/Pages/Adopt/Adopt'
import DonatePet from './Components/Pages/DonatePet/DonatePet'

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Home" element={<Home />} />
        <Route
          path="/search/:animalType/:searchLocation"
          element={<Search />}
        />
        <Route exact path="/Adopt/:id" element={<Adopt />} />
        <Route exact path="/UserProfile" element={<UserProfile />} />
        <Route exact path="/Donationrequest" element={<Donationrequest />} />
        <Route exact path="/DonatePet" element={<DonatePet />} />
      </Routes>
    </Router>
  )
}
export default Rotas
