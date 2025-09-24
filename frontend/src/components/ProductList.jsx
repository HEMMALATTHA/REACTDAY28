// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://reactday28.onrender.com/api/products/")
      .then(res => {
        console.log("Products from backend:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
