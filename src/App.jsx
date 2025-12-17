import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const[product,setProduct]=useState([]);

  const fetchData = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);

    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <h1>APP</h1>
    </div>
  );
};

export default App;