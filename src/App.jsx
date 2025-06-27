import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BasePage from './pages/BasePage'
import Mastermind from './pages/Mastermind'
import Sudoku from './pages/Sudoku'
import Minesweeper from './pages/Minesweep'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage/>}/>
        <Route path="/mastermind" element={<Mastermind/>}/>
        <Route path="/sudoku" element={<Sudoku/>}/>
        <Route path="/minesweeper" element={<Minesweeper/>}/>
      </Routes>
    </Router>
  )
}

export default App
