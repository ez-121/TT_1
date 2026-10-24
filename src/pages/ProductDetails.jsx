import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="container not-found">
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find that product.</p>
        <Link to="/" className="details-btn">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/" className="back-link">← Back to Products</Link>

      <section className="details-layout">
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />

        <div className="details-card">
          <p className="eyebrow">STYLEHUB COLLECTION</p>
          <h1>{product.name}</h1>
          <p className="details-price">{product.price} EGP</p>
          <p className="details-description">{product.description}</p>

          <div className="detail-row">
            <span>Product ID</span>
            <strong>{product.id}</strong>
          </div>
          <div className="detail-row">
            <span>Color</span>
            <strong>{product.color}</strong>
          </div>

          <Link to="/" className="details-btn">Continue Shopping</Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
