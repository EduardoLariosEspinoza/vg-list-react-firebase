import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./pages/auth"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App