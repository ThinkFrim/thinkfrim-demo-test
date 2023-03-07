import '../src/styles/global.modules.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/home"
import AboutUs from "./pages/about";
import ContactUs from "./pages/contactpage";
import Testing from './pages/Testing';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Testing" element={<Testing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
