import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/productsData';
import SafetyImage from '../assets/images/safetyfirst.webp';
import AlwaysUpDateImage from '../assets/images/alwaysuptodate.webp';
import './Products.css';
import gsap from 'gsap';

export default function Products() {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector
        ? self.selector
        : (selector: string) =>
            pageRef.current ? pageRef.current.querySelectorAll(selector) : [];
      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: 'power1.out' },
      });

      tl.fromTo(
        q('.products-head h1'),
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0 },
      ).fromTo(
        q('.products-head p'),
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      );

      tl.fromTo(
        q(
          '.products-grid > *:not([data-status="expired"]):not([data-status="soon"])',
        ),
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, stagger: 0.15 },
        '-=0.2',
      );

      tl.fromTo(
        q(
          '.products-grid > [data-status="expired"], .products-grid > [data-status="soon"]',
        ),
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 0.5, y: 0, stagger: 0.15 },
        '-=0.2',
      );

      tl.fromTo(
        q('.info-panels .info-card'),
        { autoAlpha: 0, x: 50 },
        { autoAlpha: 1, x: 0, stagger: 0.2 },
        '-=0.3',
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        id="products"
        ref={pageRef}>
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
                image={p.thumbnail}
                price={`€${p.modes[0].price.toFixed(2)}`}
                status={p.status}
                title={p.title}
                onPurchase={() => navigate(`/products/${p.slug}`)}
                data-status={p.status}
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
    </>
  );
}
