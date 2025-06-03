import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamList from "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";
import TMDB from "./components/TMDB";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-bar">
            <li><Link to="/">StreamList</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tmdb">TMDB Info</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/tmdb" element={<TMDB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
