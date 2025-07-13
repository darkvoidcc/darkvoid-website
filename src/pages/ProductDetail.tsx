import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Separator from '../components/Separator';
import RegionToggle, { Region } from '../components/RegionToggle';
import ModeSelector, { Mode } from '../components/ModeSelector';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import gsap from 'gsap';
import styles from './ProductDetail.module.css';
import { products } from '../data/productsData';

export default function ProductDetail({
  setProductBackground,
}: {
  setProductBackground?: (slug?: string) => void;
}) {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

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
    setProductBackground?.(slug);
    return () => setProductBackground?.();
  }, [slug, setProductBackground]);

  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector!;

      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: 'power1.out' },
      });

      tl.fromTo(
        q(`.${styles.productHeader}`),
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0 },
      );

      tl.fromTo(
        q(`.${styles.tags}`),
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      );
      tl.fromTo(
        q(`.${styles.paragraph}`),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      );

      tl.fromTo(
        q(`.${styles.platforms}`),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      ).fromTo(
        q(`.${styles.warning}`),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      );

      tl.fromTo(
        q(`.${styles.preview} img`),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, stagger: 0.2 },
        '-=0.4',
      );

      tl.fromTo(
        mainRef.current!.querySelector(`.${styles.checkout}`),
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0 },
        '-=0.4',
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  if (!slug) return <div>Loading...</div>;
  if (!product) return <div>Couldn't find product…</div>;

  const selectedMode = modes.find((m) => m.name === selectedModeName)!;
  const handlePayment = () => (window.location.href = selectedMode.checkoutUrl);

  return (
    <main
      ref={mainRef}
      className={styles.container}>
      <div className={styles.columns}>
        <section className={styles.content}>
          <div className={styles.productHeader}>
            <header className={styles.title}>
              <span className={styles.section}>Products</span>
              <span className={styles.separator}>/</span>
              <span className={styles.subtitle}>{product.title}</span>
            </header>
            <span
              className={
                `${styles.status} ` +
                (product.status === 'expired'
                  ? styles.statusExpired
                  : product.status === 'up-to-date'
                  ? styles.statusUpToDate
                  : product.status === 'soon'
                  ? styles.statusSoon
                  : product.status === 'in-maintenance'
                  ? styles.statusInMaintenance
                  : '')
              }>
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
            <div style={{ display: 'flex', gap: '4px' }}>
              <Icon name="intel" />
              <Icon name="nvidia" />
              <Icon name="arm" />
            </div>
            <p>{product.supported.join(', ')}</p>
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
            Choose region and mode then continue to payment.
          </p>

          <Separator
            dashLength={12}
            gapLength={6}
            thickness={2}
            color="var(--text-color)"
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
            dashLength={12}
            gapLength={6}
            thickness={2}
            color="var(--text-color)"
          />

          <p className={styles.total}>€{selectedMode.price.toFixed(2)}</p>
          <Button
            className={styles.paymentBtn}
            onClick={handlePayment}>
            Continue to Payment
          </Button>
          <p className={styles.terms}>By continuing, you accept our terms.</p>
        </aside>
      </div>
    </main>
  );
}
