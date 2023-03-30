import React from 'react';
import logo from './logo.svg';
import '../style/App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home"
import Movie from "./Movie"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
