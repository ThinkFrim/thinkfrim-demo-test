import Home from "./pages/home"
import '../src/styles/global.modules.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contactus";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
