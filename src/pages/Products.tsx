// src/pages/Products.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/productsData';
import SafetyImage from '../assets/images/safetyfirst.webp';
import AlwaysUpDateImage from '../assets/images/alwaysuptodate.webp';
import './Products.css';

export default function Products() {
  const navigate = useNavigate();

  return (
    <>
      <main id="products">
        <section className="products-section">
          <header className="products-head">
            <h1 className="txt-title">Our Products</h1>
            <p>
              A list of all current DarkVoid products available for purchase, as
              well as products we will be releasing soon.
            </p>
          </header>

          <div className="products-grid">
            {products.map((p) => (
              <ProductCard
                key={p.slug}
                image={p.images[0]}
                price={`€${p.modes[0].price.toFixed(2)}`}
                status={p.status as any}
                title={p.title}
                onPurchase={() => navigate(`/products/${p.slug}`)}
              />
            ))}
          </div>
        </section>

        <aside className="info-panels">
          <div className="info-card">
            <img
              src={SafetyImage}
              alt="Safety First"
            />
            <h3 className="info-title">Safety First.</h3>
            <p className="info-text">
              Your account’s safety is our top priority. After each game update
              we thoroughly test our protection against{' '}
              <strong>anti-cheat</strong> systems to keep your account safe.
            </p>
          </div>
          <div className="info-card">
            <img
              src={AlwaysUpDateImage}
              alt="Always up-to-date"
            />
            <h3 className="info-title">Always up-to-date.</h3>
            <p className="info-text">
              We regularly update our software and keep up to date with game
              updates.
            </p>
          </div>
        </aside>
      </main>

      <footer className="page-footer">
        DarkVoid, born in 2025, equips you and others with cutting-edge legit
        and HUH cheating software designed to elevate gameplay for all needs.
      </footer>
    </>
  );
}
