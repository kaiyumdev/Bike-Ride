import React from "react";
import './Product.css';

const Product = (props) => {
  console.log(props);
  const { id, name, img, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h1>This is product:{id}</h1>
        <h3>name: {name}</h3>
        <p>price: {price}</p>
      </div>
    </div>
  );
};

export default Product;
