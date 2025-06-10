import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BasePage from './pages/BasePage'
import Solitaire from './pages/Solitaire'
import Mastermind from './pages/Mastermind'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage/>}/>
        <Route path="/solitaire" element={<Solitaire/>}/>
        <Route path="/mastermind" element={<Mastermind/>}/>
      </Routes>
    </Router>
  )
}

export default App
