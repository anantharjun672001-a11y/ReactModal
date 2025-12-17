import React from "react";

const ProductList = ({ product,status,handleInc,handleDec }) => {
  return (
    <div>
      {product.map((ele,id) => {
        return (
          <div key={id}>
            <h1>{ele.title}</h1>
            <img src={ele.image} alt="" />
            <h1>{ele.price}</h1>
            <p>{ele.description}</p>
            <p>{ele.category}</p>
            {status ? (
              <button onClick={handleInc}>Add To Cart</button>
            ) : (
              <button onClick={handleDec}>Remove From Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
