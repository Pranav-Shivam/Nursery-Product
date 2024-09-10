import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total items in the cart, limit to 99+
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const displayItems = totalItems > 99 ? "99+" : totalItems;

  const redirectToCart = () => {
    navigate("/carts");
  };
  const redirectToHome = () => {
    navigate("/");
  };
  const redirectToPlants = () => {
    navigate("/product");
  };

  return (
    <div className="header">
      <div className="header-left" onClick={redirectToHome}>
        <div className="icon">
          <img src="/img/icon.png" alt="Icon" className="icon-img" />
        </div>
        <div className="span-nur">
          <span className="span-title">Paradise Nursery</span>
          <span>Where Green Meets Serenity</span>
        </div>
      </div>
      <div className="header-center" onClick={redirectToPlants}>
        <span>Plants</span>
      </div>
      <div className="header-right" onClick={redirectToCart}>
        <img src="/img/cart.png" alt="Cart" className="cart-img" />
        <span className="cart-value">{displayItems}</span>
      </div>
    </div>
  );
};


export default Header;
