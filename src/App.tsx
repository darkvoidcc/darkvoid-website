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
import FAQ from './pages/resources/FAQ';
import { useState, useCallback } from 'react';
import gradient from './assets/images/Gradient.webp';
import { products } from './data/productsData';

function App() {
  const [backgroundImage, setBackgroundImage] = useState<string>(gradient);

  // Ürün detayına girildiğinde arka planı değiştir
  const handleSetProductBackground = useCallback((slug?: string) => {
    if (!slug) {
      setBackgroundImage(gradient);
      return;
    }
    const product = products.find((p) => p.slug === slug);
    if (product && product.thumbnail) {
      setBackgroundImage(product.thumbnail);
    } else {
      setBackgroundImage(gradient);
    }
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
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
            path="/products/:slug"
            element={
              <ProductDetail
                setProductBackground={handleSetProductBackground}
              />
            }
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
