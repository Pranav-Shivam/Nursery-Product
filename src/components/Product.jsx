import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import "../assets/css/product.css";
import Header from "../shared/Header";

const plantData = [
  {
    name: "Blessed to Have You Mom Gift Basket",
    url: "/img/blessed-to-have-you-mom-gift-basket_1.webp",
    price: 34,
  },
  {
    name: "Bringing Good Luck Standard",
    url: "/img/bringing-good-luck-standard_1.webp",
    price: 67,
  },
  {
    name: "Ficus Compacta Surprise",
    url: "/img/ficus-compacta-surprise_2.webp",
    price: 22,
  },
  {
    name: "Gold Harmony with Peace Lily",
    url: "/img/gold-harmony-with-peace-lily_1.webp",
    price: 89,
  },
  {
    name: "Jade Plant Terrarium in Glass Vase",
    url: "/img/jade-plant-terrarium-in-glass-vase_1.webp",
    price: 56,
  },
  {
    name: "Milt Sansevieria Plant Oval Jar Terrarium",
    url: "/img/milt-sansevieria-plant-oval-jar-terrarium_2.webp",
    price: 43,
  },
  {
    name: "Peace Lily Plant in White Aesthetic Pot",
    url: "/img/peace-lily-plant-in-white-aesthetic-pot_1.webp",
    price: 78,
  },
  {
    name: "Pedilanthus Serenity Plant Gift",
    url: "/img/pedilanthus-serenity-plant-gift_1.webp",
    price: 12,
  },
  {
    name: "Peperomia Elegance in Gold",
    url: "/img/peperomia-elegance-in-gold_2.webp",
    price: 90,
  },
  {
    name: "Red Aglaonema Plant in Golden Plate Cat Print Pot",
    url: "/img/red-aglaonema-plant-in-golden-plate-cat-print-pot_2.webp",
    price: 3,
  },
  {
    name: "Spider Plant Cylindrical Vase Terrarium",
    url: "/img/spider-plant-cylindrical-vase-terrarium_1.webp",
    price: 55,
  },
  {
    name: "Spider Plant in Red Glass Vase",
    url: "/img/spider-plant-in-red-glass-vase_4.webp",
    price: 11,
  },
];


const Product = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />
      <div className="air-plants">
        <span className="plants-span">Air purifing Plants</span>
      </div>
      <div className="product-list">
        {plantData.map((plant, index) => (
          <div key={index} className="product-item">
            <span className="sale-label">SALE</span>
            <img src={plant.url} alt={plant.name} className="product-img" />
            <span className="product-price">${plant.price}</span>
            <h2 className="heading truncate">{plant.name}</h2>
            <button onClick={() => handleAddToCart(plant)} className="btn-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
