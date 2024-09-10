import React from "react";
import "../assets/css/product.css";

const Plants = () => {
  const [pname, imageUrl, price] = [
    "Mom Gift Basket",
    "/img/blessed-to-have-you-mom-gift-basket_1.webp",
    "$25",
  ];
  return (
    <>
      <div className="product-card">
        <div className="sale-label">SALE</div>
        <h3 className="product-name">{pname}</h3>
        <img src={imageUrl} alt={pname} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{pname}</h3>
          <p className="product-price">${price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Plants;
