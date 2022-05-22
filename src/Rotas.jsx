import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'
import Home from './Components/Pages/Home/Home'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}
export default Rotas
