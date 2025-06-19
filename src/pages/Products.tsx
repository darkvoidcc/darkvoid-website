import { ProductCard } from '../components/ProductCard';
import ValorantImage from '../assets/images/valorant.webp';
import CSGOImage from '../assets/images/counterstrike.png';

export default function Products() {
  return (
    <main id="products">
      <section>
        <ProductCard
          image={ValorantImage}
          price="€4.00"
          status="up-to-date"
          title="Valorant"
        />
        <ProductCard
          image={CSGOImage}
          price="€4.00"
          status="error"
          title="Counter Strike 2"
        />
      </section>
    </main>
  );
}
