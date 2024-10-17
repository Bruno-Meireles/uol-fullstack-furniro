import "./Product.css";

const products = [
  {
    id: 1,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    originalPrice: "R$ 3.500.000",
    discount: "-30%",
    image: "/assets/images/Syltherine.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    image: "/assets/images/leviosa.png",
  },
  {
    id: 3,
    name: "Respira",
    description: "Luxury big sofa",
    price: "R$ 7.000.000",
    originalPrice: "R$ 14.000.000",
    discount: "-50%",
    image: "/assets/images/respira.png",
  },
  {
    id: 4,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
];

const Product: React.FC = () => {
  const handleSeeDetails = (productId: number) => {
    console.log("Viewing details for product:", productId);
  };

  const handleShowMore = () => {
    console.log("Showing more products");
  };

  return (
    <section>
      <div className="product-content">
        <h1>Our Products</h1>
        <div className="product-flex">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <span className="discount">{product.discount}</span>
                )}
                {product.isNew && <span className="new">New</span>}
                <div className="hover-actions">
                  <button
                    className="button-details"
                    onClick={() => handleSeeDetails(product.id)}
                  >
                    See Details
                  </button>
                  <div className="actions">
                    <img
                      src="/assets/icons/share.svg"
                      alt="Share"
                      className="actions-icon"
                    />
                    <a href="#">Share</a>
                    <img src="/assets/icons/compare.svg" alt="Compare" />
                    <a href="#">Compare</a>
                    <img src="/assets/icons/like.svg" alt="Like" />
                    <a href="#">Like</a>
                  </div>
                </div>
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-sub-title">{product.description}</p>
              <div className="price-container">
                <p className="price">{product.price}</p>
                {product.originalPrice && (
                  <p className="original-price">
                    <s>{product.originalPrice}</s>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default Product;