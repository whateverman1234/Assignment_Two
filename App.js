import './App.css';
import MyNavbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MoreText from './MoreText'; // import the new component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/moretext" element={<MoreText />} /> // add the new route
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;