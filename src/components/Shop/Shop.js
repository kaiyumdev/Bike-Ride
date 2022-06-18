import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/784fa73a-9d12-4d1d-804a-d45be465c6d0")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <Cart cart={cart}></Cart> */}
      </div>
    </div>
  );
};

export default Shop;
