import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'
import Home from './Components/Pages/Home/Home'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}
export default Rotas
