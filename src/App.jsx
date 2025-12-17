import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";

const App = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState(true);

  const handleInc = () => {
    setStatus(false);
    setCart((cart) => cart + 1);
  };
  const handleDec = () => {
    setStatus(true);
    if (cart > 0) {
      setCart((cart) => cart - 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      
      <ProductList
        product={product}
        status={status}
        handleDec={handleDec}
        handleInc={handleInc}
      />
    </div>
  );
};

export default App;
