import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">NEW COLLECTION</p>
        <h1>Find Your Everyday Style</h1>
        <p className="subtitle">
          Simple essentials. Easy style. Meet your new favorites.
        </p>
      </section>

      <section aria-labelledby="collection-title">
        <h2 id="collection-title" className="section-title">
          Our Clothing Collection
        </h2>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <p className="product-color">
                  <span className={`color-dot color-${product.color.toLowerCase()}`} />
                  {product.color}
                </p>
                <h3>{product.name}</h3>
                <p className="price">{product.price} EGP</p>
                <Link to={`/products/${product.id}`} className="details-btn">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
