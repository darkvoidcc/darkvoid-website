import { ProductCard } from '../components/ProductCard';
import ValorantImage from '../assets/images/valorant.webp';
import SecretLabImage from '../assets/images/seretlab.webp';
import FaceitImage from '../assets/images/faceit.webp';
import TheFinalsImage from '../assets/images/thefinals.webp';
import CSGOImage from '../assets/images/counterstrike.png';
import GenshinImpactImage from '../assets/images/genshinimpact.webp';
import SafetyImage from '../assets/images/safetyfirst.webp';
import AlwaysUpDateImage from '../assets/images/alwaysuptodate.webp';
import './Products.css';

export default function Products() {
  return (
    <main id="products">
      <section className="products-section">
        <header className="products-head">
          <h1 className="txt-title">Our Products</h1>
          <p>
            A list of all current DarkVoid products available for
            purchase,&nbsp; as well as products we will be releasing soon.
          </p>
        </header>

        <div className="products-grid">
          <ProductCard
            image={SecretLabImage}
            price="€4.00"
            status="expired"
            title="Secret Lab: SL"
          />
          <ProductCard
            image={ValorantImage}
            price="€8.00"
            status="up-to-date"
            title="Valorant"
          />

          <ProductCard
            image={FaceitImage}
            price="€8.00"
            status="expired"
            title="Faceit"
          />
          <ProductCard
            image={CSGOImage}
            price="€4.00"
            status="expired"
            title="Counter Strike 2"
          />
          <ProductCard
            image={GenshinImpactImage}
            price="€4.00"
            status="expired"
            title="Genshin Impact"
          />
          <ProductCard
            image={TheFinalsImage}
            price="€8.00"
            status="expired"
            title="The Finals"
          />
        </div>
      </section>

      <aside className="info-panels">
        <div className="info-card">
          <img
            src={SafetyImage}
            alt=""
          />
          <h3 className="info-title">Safety First.</h3>
          <p className="info-text">
            Your account’s safety is our top priority. After each game update we
            thoroughly test our protection against&nbsp;
            <strong>anti-cheat</strong> systems to keep your account safe.
          </p>
        </div>

        <div className="info-card">
          <img
            src={AlwaysUpDateImage}
            alt=""
          />
          <h3 className="info-title">Always up-to-date.</h3>
          <p className="info-text">
            We regularly update our software and keep up to date with game
            updates.
          </p>
        </div>
      </aside>
    </main>
  );
}
