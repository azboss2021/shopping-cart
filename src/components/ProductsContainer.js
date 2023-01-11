import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsContainer({ products, cart, setCart }) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            cart={cart}
            setCart={setCart}
            key={product.id}
          />
        );
      })}
    </div>
  );
}
