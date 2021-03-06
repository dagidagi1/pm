import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Teams from './pages/team';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
