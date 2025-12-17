import ProductCard from "./ProductCard";

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={cart.some(item => item.id === product.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
