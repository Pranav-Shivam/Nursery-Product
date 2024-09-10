import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./redux/cartSlice";
import Header from "../shared/Header";
import "../assets/css/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (itemName) => {
    dispatch(incrementQuantity(itemName));
  };

  const handleDecrement = (itemName) => {
    dispatch(decrementQuantity(itemName));
  };

  const handleDelete = (itemName) => {
    dispatch(removeFromCart(itemName));
  };

  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const redirectToPlants = () => {
    navigate("/product");
  };

  return (
    <>
      <Header />
      <div className="plants-cost">
        <span className="price-span"> Total Cost: ${totalCost.toFixed(2)}</span>
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="cart-container">
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <h5 className="title truncate">{item.name}</h5>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.name)} className="btn-minus"> - </button>
                  <span> {item.quantity} </span>
                  <button onClick={() => handleIncrement(item.name)} className="btn-plus"> + </button>
                </div>
                <div className="item-price">
                  Price: ${item.price.toFixed(2)}
                </div>
                <div className="item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div>
                  <button type="submit" className="btn-delete" onClick={() => handleDelete(item.name)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="checkout">
      <button type="submit" className="btn-shopping"  onClick={redirectToPlants}>
          Continue Shopping
        </button>
        <br />
        <button type="submit" className="btn-checkout">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
