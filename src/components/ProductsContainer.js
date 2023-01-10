import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsContainer({
  products,
  cart,
  setCart,
  setCartQuantity,
  setCartCost,
}) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            cart={cart}
            setCart={setCart}
            setCartQuantity={setCartQuantity}
            setCartCost={setCartCost}
            key={product.id}
          />
        );
      })}
    </div>
  );
}
