import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Navbar from './Components/Navbar'
import PageHome from "./Components/PageHome";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* 
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        */}
      </Routes>
    </Router>
  )
}

export default App
