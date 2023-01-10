import React, { useState } from 'react';

export default function ProductCard({
  product,
  cart,
  setCart,
  setCartQuantity,
  setCartCost,
}) {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    setQuantity((current) => current - 1);
  };

  const incrementQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const addToCart = () => {
    if (quantity <= 0 || !quantity) {
      window.alert('Invalid quantity!');
      return;
    }
    const curr = cart.findIndex((item) => item.product.name === product.name);
    if (curr >= 0) {
      const tempCart = [...cart];
      tempCart[curr].quantity += quantity;
      setCart([...tempCart]);
    } else {
      setCart((current) => [...current, { product, quantity }]);
    }
    setCartQuantity((current) => current + quantity);
    setCartCost((current) => current + product.price * quantity);
  };

  return (
    <div className="product">
      <div className="product_name">{product.name}</div>
      <div className="product_price">${product.price} / Battle</div>
      <img className="product_image" alt={product.name} src={product.img}></img>
      <div className="quantity">
        <button className="change_quantity" onClick={decrementQuantity}>
          -
        </button>
        <p>{quantity}</p>
        <button className="change_quantity" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button className="add_to_cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
