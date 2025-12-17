import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";
import CartModal from "./Components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <NavBar cartCount={cart.length} openCart={() => setShowCart(true)} />

      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      {showCart && (
        <CartModal
          cart={cart}
          closeModal={() => setShowCart(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default App;
