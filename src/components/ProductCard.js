import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <div className="product_name">{product.name}</div>
      <div className="product_price">${product.price} / Battle</div>
      <img className="product_image" alt={product.name} src={product.img}></img>
      <div className="quantity">
        <button className="change_quantity">-</button>
        <div className="quantity_input_area">
          <input
            className="quantity_input"
            id={"quantity_" + product.name}
            type="number"
            defaultValue="0"
          />
        </div>
        <button className="change_quantity">+</button>
      </div>
      <button className="add_to_cart">Add to Cart</button>
    </div>
  );
}
