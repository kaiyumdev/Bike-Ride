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
    if(mainProduct===0){
      mainProduct.style.display = 'block';
    }
    else {
      mainProduct.style.display = 'none';
    }
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
        <h3>Name:{name}</h3>
        {/* <p>MainProduct: {mainProduct}</p> */}
        {/* <p>MainProduct:{mainProduct}</p> */}
        <br />
      </div>
      <div className="random">
        <h1>Random Product:{cart.mainProduct?.name}</h1>
      </div>
      <button onClick={() => handleAddToSelect()}>Choose one for me</button>
      {/* console.log(b); */}
    </div>
  );
};

export default Cart;
