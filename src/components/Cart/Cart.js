import React, { useState } from "react";
import "./Cart.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  // console.log(props);
  const { cart, handleRemoveFromCart } = props;
  console.log(cart);
  const [random, setRandom] = useState([])
  // let name = 0;
  // for (const product of cart) {
  //   console.log(product);
  //   name = name + product.name;
  // }
  const handleAddToSelect = () => {
    let mainProduct = cart[Math.floor(Math.random() * cart.length)];
    setRandom(mainProduct);
    // console.log("click me", cart.name);
    // mainProduct.body.style.backgroundColor = '#FFFFFF';
    // if(mainProduct===0){
    //   // mainProduct.style.display = 'block';
    //   alert('selected the main product');
    // }
    // else {
    //   mainProduct.style.display = 'none';
    // }
    // mainProduct.innerHTML = `<span style="color:red;">This is random product</span>`;
    // return mainProduct;
    console.log(mainProduct);
    // console.log(cart);
    // console.log("button click");
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Selected Bike</h1>
        <p>cart:{cart.length}</p>
        {cart.map(singleProduct =><p  key={singleProduct.id}>
          {singleProduct.name}
          <button onClick={() =>handleRemoveFromCart(singleProduct)}> <FontAwesomeIcon icon={faTrash} /></button>
          </p>)}
        <br />
      </div>
      <div className="random">
        {random.name}
       </div>
      <button onClick={() => handleAddToSelect()}>Choose one for me</button>
      {/* console.log(b); */}
    </div>
  );
};

export default Cart;
