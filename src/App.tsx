import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Products from './pages/Products';
import Resources from './pages/Resources';
import Status from './pages/Status';
import AntiBanGuide from './pages/resources/AntiBanGuide';

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
          <Route
            path="/resources"
            element={<Resources />}
          />
          <Route
            path="/resources/antibanguide"
            element={<AntiBanGuide />}
          />
          <Route
            path="/status"
            element={<Status />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
