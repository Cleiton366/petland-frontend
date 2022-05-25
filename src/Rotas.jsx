import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Index from './Components/Pages/Index/Index'
import UserProfile from './Components/Pages/User Profile/UserProfile'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  )
}
export default Rotas
