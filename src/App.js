// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PaletteExplorerPage from './components/PaletteExplorerPage';
import SymbolismExplorerPage from './components/SymbolismExplorerPage';
import ColorSwapPage from './components/ColorSwapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palettes" element={<PaletteExplorerPage />} />
        <Route path="/symbolism" element={<SymbolismExplorerPage />} />
        <Route path="/color-swap" element={<ColorSwapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
