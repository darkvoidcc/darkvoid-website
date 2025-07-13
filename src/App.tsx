import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
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
import gradient from './assets/images/Gradient.webp';
import { products } from './data/productsData';

function AppContent() {
  const location = useLocation();
  const [bgImage, setBgImage] = useState<string>(gradient);

  const handleSetProductBackground = useCallback((slug?: string) => {
    const url = slug
      ? products.find((p) => p.slug === slug)?.thumbnail || gradient
      : gradient;
    setBgImage(url);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith('/products/')) return;

    if (location.pathname.startsWith('/resources')) {
      setBgImage('');
    } else {
      setBgImage(gradient);
    }
  }, [location.pathname]);

  const isResource = location.pathname.startsWith('/resources');

  return (
    <div
      className="App"
      style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        className="bg-layer"
        style={{
          background: isResource ? '#000' : undefined,
          backgroundImage: isResource
            ? undefined
            : `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 1,
        }}
      />
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
            <ProductDetail setProductBackground={handleSetProductBackground} />
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
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
