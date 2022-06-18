import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Product.css";

const Product = ({handleAddToCart, product}) => {
  // console.log(props);
  const { id, name, img, price } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2>Name:{name}</h2>
        <h4>price: {price}</h4>
        <h5>Bike No: {id}</h5>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
