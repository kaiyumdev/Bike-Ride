import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props);
  const { cart } = props;
  // console.log(cart);
  let name = 0;
  for (const product of cart) {
    console.log(product);
    name = name + product.name;
  }
  const handleAddToSelect = () => {
    let mainProduct = cart[Math.floor(Math.random() * cart.length)];
    // return mainProduct;
    console.log(mainProduct);
    console.log(cart);
    console.log("button click");
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Selected Bike</h1>
        <p>cart:{cart.length}</p>
        <li>
          <h3>Name:{name}</h3>
        </li>
        {/* <p>MainProduct:{mainProduct}</p> */}
        <br />
      </div>
      <button onClick={() => handleAddToSelect()}>Choose one for me</button>
      {/* console.log(b); */}
    </div>
  );
};

export default Cart;
