import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Resources from './pages/resources';
import AntiBanGuide from './pages/resources/AntiBanGuide';
import Terms from './pages/resources/Terms';
import Privacy from './pages/resources/Privacy';
import Status from './pages/Status';
import banner from './assets/images/valorant.webp';
import FAQ from './pages/resources/FAQ';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
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
            path="/products/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/status"
            element={<Status />}
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
            path="/resources/faq"
            element={<FAQ />}
          />
          <Route
            path="/resources/terms"
            element={<Terms />}
          />
          <Route
            path="/resources/privacy"
            element={<Privacy />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
