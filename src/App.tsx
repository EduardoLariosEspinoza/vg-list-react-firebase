import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./pages/auth"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/list" element={<div>List</div>} />
          <Route path="/search" element={<div>search</div>} />
          <Route path="/game/:id" element={<div>game</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App