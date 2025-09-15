import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello, world!</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App