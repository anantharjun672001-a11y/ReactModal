import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ product,status,handleInc,handleDec }) => {
  return (
    <div className="product-grid">
      {product.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          status={status}
          handleInc={handleInc}
          handleDec={handleDec}
        />
      ))}
    </div>
  );
};

export default ProductList;
