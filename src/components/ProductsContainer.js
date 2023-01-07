import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsContainer({ products }) {
  return (
    <div className="products">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}
