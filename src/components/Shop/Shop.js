import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/784fa73a-9d12-4d1d-804a-d45be465c6d0")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // console.log(product);
    const exists = cart.find(singleProduct => singleProduct.id === product.id)
    if(!exists) {
      const newCart = [...cart, product];
      setCart(newCart);
    }
    else{
      alert('cart already added');
    }
  };

  const handleRemoveFromCart = (selctedItem) => {
    const rest = cart.filter(singleProduct => singleProduct.id !==selctedItem.id);
    setCart(rest);

  }
  const handleRemoveAllItem = (selctedItem) => {
    const item = cart.filter(singleProduct => singleProduct.id ==selctedItem.id);
    setCart(item);
  }
  return (
    <div className="title">
      <h1>Bike Riders</h1>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart 
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleRemoveAllItem={handleRemoveAllItem}
          ></Cart>
        </div>
      </div>
      <div className="text">
        <p>
          React is without a doubt one of the most powerful and flexible
          frontend frameworks. But with its great power comes great
          responsibility – it’s easy to misuse it and create a mess of an app.
          To avoid it, one needs to really understand how React works internally
          by studying its code implementation and structure. Coincidentally, it
          is also one of the best ways to learn React in general. Let’s do this
          today!
        </p>
        <p>
          The status of a react class component instance can be described as an
          object of a collection of observed features that control the
          component’s behavior. In other words, the component’s state is an
          entity with some details that can alter during the component’s
          lifetime.React is a library focused on components that separate the
          user interface into reusable little bits. These components have to
          transmit (send data to each other) in some cases, and the way to
          transmit data among components is through props.
        </p>
        <p>
          useState is a Hook (function) that allows you to have state variables
          in functional components. You pass the initial state to this function
          and it returns a variable with the current state value (not
          necessarily the initial state) and another function to update this
          value.
        </p>
      </div>
    </div>
  );
};

export default Shop;
