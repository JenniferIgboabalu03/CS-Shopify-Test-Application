import { Home } from "./Home Page/home"
import { BrowserRouter as Route, Router, Routes  } from "react-router"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/> } />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
