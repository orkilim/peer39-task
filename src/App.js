import React from 'react'
//import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home'
import Episode from './Components/Episode'
import Character from './Components/Character'

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/episode/:id" element={<Episode/>} />
      <Route path="/character/:name" element={<Character/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * <Route path="/episode" element={<Episode/>} />
      <Route path="/character/:name" element={<Character/>} />
 */