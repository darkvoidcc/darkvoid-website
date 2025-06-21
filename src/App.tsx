import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Products from './pages/Products';
import Status from './pages/Status';

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
            path="/status"
            element={<Status />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
