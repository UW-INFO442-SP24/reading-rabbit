import { Books } from './components/Books/books.js';
import { Home } from './components/Home/home.js';
import { Events } from './components/Events/events.js';
import { SingleBook } from './components/Books/singlebook.js';
import { Resources } from './components/Resources/resources.js';
import { Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './style.css';
import MapComponent from './components/Map/map';
import EventPage from './components/Events/EventPage.js';

export default function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div>
      {/* navbar */}
      <nav>
        <div className="logo">
          <img src="../img/reading-rabbit-logo.png" alt="logo" />
          <a className="group-name" href='/'>Reading <br />Rabbit</a>
        </div>
        <div className="hamburger-selection">
          <span className="material-symbols-outlined" state={hamburgerOpen ? "Close" : "Open"} onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            menu
          </span>
          {hamburgerOpen && (
            <ul className={`menuNav ${hamburgerOpen ? " showMenu" : ""}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/find-your-library">Find Your Library</Link></li>
            </ul>
          )}
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/find-your-library">Find Your Library</Link></li>
          </ul>
        </div>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/singlebook" element={<SingleBook />} />
        <Route path="/events" element={<Events />} />
        <Route path="/find-your-library" element={<MapComponent />} />
        <Route path="/event/:eventType" element={<EventPage/>} />
      </Routes>
    </div>
  );
}