import React, { useState } from "react";
import './Cart.css';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // console.log(props);
  const { cart, handleRemoveFromCart, handleRemoveAllItem } = props;
  console.log(cart);
  const [random, setRandom] = useState([]);

  const handleAddToSelect = () => {
    let mainProduct = cart[Math.floor(Math.random() * cart.length)];
    setRandom(mainProduct);
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Selected Bike</h1>
        <p>cart:{cart.length}</p>
        {cart.map((singleProduct) => (
          <p key={singleProduct.id}>
            {singleProduct.name}
            <button onClick={() => handleRemoveFromCart(singleProduct)}>
              {" "}
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </p>
        ))}
        <br />
      </div>
      <div className="random">{random.name}</div>
      <button onClick={() => handleAddToSelect()}>Choose one for me</button>
      <br />
      <button onClick={() =>handleRemoveAllItem(random.name)}>Reset All</button>
      {/* console.log(b); */}
    </div>
  );
};

export default Cart;
