import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './Components/Pages/Search/Search'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Search" element={<Search />} />
      </Routes>
    </Router>
  )
}
export default Rotas
