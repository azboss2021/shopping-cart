import React, { useState } from 'react';

export default function ProductCard({
  product,
  cart,
  setCart,
  setCartQuantity,
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

    if (cart.find((element) => element.product.name === product.name)) {
    }
    // setCart((current) => [...current, { product, quantity }]);
    setCartQuantity((current) => current + quantity);
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
        <div>{quantity}</div>
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
