import React from "react";

const ProductCard = ({product,handleDec,handleInc,status}) => {
  return (
    <div className="card">
      
      <img src={product.image} alt="product.title" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      {status ? (
        <button onClick={handleInc}>Add To Cart</button>
      ) : (
        <button onClick={handleDec}>Remove From Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
