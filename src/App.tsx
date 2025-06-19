import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ position: 'relative', minHeight: '100vh' }}>
        <div className="background-gradient" />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
