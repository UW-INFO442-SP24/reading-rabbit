import About from './components/About/about.js';
import Home from './components/Home/home.js';
import Events from './components/Events/events.js';
import Map from './components/Map/map.js';
import Resources from './components/Resources/resources.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Map" element={<Map/>} />
          <Route path="/Resources" element={<Resources/>} />
          </Routes>
        </Router> 
      </div>
    );
  }
  