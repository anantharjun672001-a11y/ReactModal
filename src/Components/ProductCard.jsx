import React from "react";

const ProductCard = ({product,handleDec,handleInc,status}) => {
  return (
    <div className="card">
      
      <img src={product.image} alt="product.title" />
      <h1>{product.title}</h1>
      <h1>${product.price}</h1>
      <p>{product.description}</p>
      <p>{product.category}</p>
      {status ? (
        <button onClick={handleInc}>Add To Cart</button>
      ) : (
        <button onClick={handleDec}>Remove From Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
