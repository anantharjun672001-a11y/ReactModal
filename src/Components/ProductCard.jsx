const ProductCard = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>
          Remove From Cart
        </button>
      ) : (
        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
