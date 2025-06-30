// src/pages/ProductDetail.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Separator from '../components/Separator';
import RegionToggle, { Region } from '../components/RegionToggle';
import ModeSelector, { Mode } from '../components/ModeSelector';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import styles from './ProductDetail.module.css';
import { products } from '../data/productsData';

interface ProductDetailProps {
  setProductBackground?: (slug?: string) => void;
}

export default function ProductDetail({
  setProductBackground,
}: ProductDetailProps) {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  console.log('slug:', JSON.stringify(slug));
  console.log(
    'products slugs:',
    products.map((p) => p.slug),
  );
  const product = products.find((p) => p.slug === slug);

  // Hooks – unconditional
  const [region, setRegion] = useState<Region>('global');
  const [modes, setModes] = useState<Mode[]>(product?.modes || []);
  const [selectedModeName, setSelectedModeName] = useState(
    product?.modes[0]?.name || '',
  );

  useEffect(() => {
    if (slug && !product) navigate('/products');
  }, [slug, product, navigate]);

  useEffect(() => {
    if (product) {
      setModes(product.modes);
      setSelectedModeName(product.modes[0].name);
    }
  }, [product, region]);

  useEffect(() => {
    if (setProductBackground) setProductBackground(slug);
    return () => {
      if (setProductBackground) setProductBackground(); // Çıkınca solar'a dön
    };
  }, [slug, setProductBackground]);

  if (!slug) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Couldn't find the product, redirecting...</div>;
  }

  const selectedMode = modes.find((m) => m.name === selectedModeName)!;

  const handlePayment = () => {
    window.location.href = selectedMode.checkoutUrl;
  };

  return (
    <main className={styles.container}>
      <div className={styles.columns}>
        <section className={styles.content}>
          <div className={styles.productHeader}>
            <header className={styles.title}>
              <span className={styles.section}>Products</span>
              <span className={styles.separator}>/</span>
              <span className={styles.subtitle}>{product.title}</span>
            </header>
            <span className={styles.status}>
              {product.status.toUpperCase()}
            </span>
          </div>

          <div className={styles.tags}>
            {product.tags.map((t) => (
              <span
                key={t}
                className={styles.tag}>
                {t}
              </span>
            ))}
          </div>

          <p className={styles.paragraph}>{product.description}</p>

          <div className={styles.platforms}>
            <strong>SUPPORTED PLATFORMS</strong>
            <div>
              <p>{product.supported.join(', ')}</p>
              <div style={{ display: 'flex', gap: '4px' }}>
                <Icon name="intel" />
                <Icon name="nvidia" />
                <Icon name="arm" />
              </div>
            </div>
          </div>

          <div className={styles.warning}>
            <strong>BAN RISK</strong>
            <p>{product.warnings}</p>
          </div>

          <div className={styles.preview}>
            {product.preview.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Preview ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <aside className={styles.checkout}>
          <div className={styles.checkoutHeader}>
            <Icon
              name="cart"
              className={styles.checkoutIcon}
            />
            <h2 className={styles.checkoutHeading}>Checkout</h2>
          </div>

          <p className={styles.paragraph}>
            Select your region so we can find a convenient payment method for
            you.
          </p>

          <Separator
            color="var(--text-color)"
            dashLength={12}
            gapLength={6}
            thickness={2}
          />

          <RegionToggle
            selected={region}
            onChange={setRegion}
          />

          <ModeSelector
            modes={modes}
            selected={selectedModeName}
            onChange={setSelectedModeName}
          />

          <Separator
            color="var(--text-color)"
            dashLength={12}
            gapLength={6}
            thickness={2}
          />

          <p className={styles.total}>€{selectedMode.price.toFixed(2)}</p>
          <Button
            className={styles.paymentBtn}
            onClick={handlePayment}>
            Continue to Payment
          </Button>
          <p className={styles.terms}>
            By continuing, you accept{' '}
            <a href="/resources/terms">Terms of Services</a>
          </p>
        </aside>
      </div>
    </main>
  );
}
