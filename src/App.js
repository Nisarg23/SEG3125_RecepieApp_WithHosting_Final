import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Browse from './pages/browse';
import Recepie from './pages/recepie';
import Login from './pages/login';
import MyRecepie from './pages/my-recepie';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' exact element={<Home/>} />
        <Route path='/browse' exact element={<Browse/>} />
        <Route path='/recepie' exact element={<Recepie/>} />
        <Route path='/my-recepies' exact element={<MyRecepie/>} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
