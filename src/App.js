import Home from "./pages/home"
import '../src/styles/global.modules.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";
import Nav from "./components/nav";
import AboutUs from "./pages/about";
// import { Router } from "react-router-dom";
// import {  } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
