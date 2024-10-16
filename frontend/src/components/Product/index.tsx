const Product = (props: IProps) => {
  const { product, onSeeDetails } = props; 

  return (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image_link} alt={product.name} />
        {product.discount_percent && (
          <span className="discount_percent">-{product.discount_percent}%</span>
        )}
        {product.is_new && <span className="new">New</span>}
        <div className="hover-actions">
          <button
            className="button-details"
            onClick={() => onSeeDetails(product.id)} 
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
        <p className="price">
          R$
          <span className="price-value-discount">
            {parseFloat(product.price).toLocaleString("pt-BR")}
          </span>
        </p>

        {product.discount_price && (
          <p className="original-price">
            R$
            <span className="price-value">
              {parseFloat(product.discount_price).toLocaleString("pt-BR")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

interface IProps {
  product: Product;
  onSeeDetails: (productId: number) => void;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price?: string;
  discount_percent?: string;
  image_link: string;
  is_new?: boolean;
}

export default Product;
