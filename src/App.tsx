import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Products from './pages/Products';
import Resources from './pages/resources';
import Status from './pages/Status';
import AntiBanGuide from './pages/resources/AntiBanGuide';
import Terms from './pages/resources/Terms';
import Privacy from './pages/resources/Privacy';

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
            path="/terms"
            element={<Terms />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
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
