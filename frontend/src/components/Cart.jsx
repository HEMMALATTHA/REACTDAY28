// src/components/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store";
import axios from "axios";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const placeOrder = async () => {
    try {
      await axios.post("https://reactday28.onrender.com/api/orders/", {
        cart: cart.map(item => ({ id: item.id })) // send only IDs
      });
      alert("Order placed!");
      dispatch(clearCart());
    } catch (err) {
      console.log(err);
      alert("Order failed");
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map(item => (
        <div key={item.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
          {item.name} - ${item.price} 
          <button onClick={() => dispatch(removeFromCart(item.id))} style={{marginLeft:"10px"}}>
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={placeOrder}>Checkout</button>}
    </div>
  );
};

export default Cart;
