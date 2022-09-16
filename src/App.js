import logo from './logo.svg';
import NavbarComponent from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
