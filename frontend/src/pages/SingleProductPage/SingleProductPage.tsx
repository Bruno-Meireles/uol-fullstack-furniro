import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../Home/ProductList/ProductList";
import axios from "axios";
import "./SingleProductPage.css";
import ProductDetailItem from "./ProductDetailItem/ProductDetailItem";

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        return axios.get(
          `http://localhost:3000/products?categoryId=${response.data.categoryId}`
        );
      })
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (action: string) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <section className="singleBar">
        <div className="content">
          <nav className="singleBarItems">
            <Link to={"/"} className="singleBarLinks">
              Home
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <Link to={"/shop"} className="singleBarLinks">
              Shop
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <img src="/assets/icons/line.svg" alt="line" />
            <p>{product.name}</p>
          </nav>

          <ProductDetailItem
            product={product}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </section>

      <div className="separador"></div>
      <ProductsList
        title="Related Products"
        products={relatedProducts}
        limit={4}
        isSinglePage={true}
      />
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price?: string;
  discount_percent?: string;
  image_link: string;
  other_images_link: string[];
  is_new?: boolean;
  sku: string;
}

export default SingleProductPage;
