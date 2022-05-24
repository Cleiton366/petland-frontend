import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Index from './Components/Pages/Index/Index'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}
export default Rotas
