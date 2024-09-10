import React, { useEffect } from "react";
import "../assets/css/landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const navigateToLanding = () => {
    navigate("/product");
  };
  return (
    <>
      <div className="landing">
        <div className="section">
          <div className="landing-left">
            <h1>
              Welcome To <br /> Paradise Nursery
            </h1>
            <span>Where Green Meets Serenity</span>
            <button className="btn" onClick={navigateToLanding}>
              Get Started
            </button>
          </div>
          <div className="landing-right">
            <h4>
              Welcome to Paradise Nursery, where tranquility and greenery unite!
            </h4>
            At Paradise Nursery, we are dedicated to bringing nature closer to
            you. Our mission is to offer a diverse selection of top-quality
            plants that not only beautify your environment but also promote a
            healthier, more sustainable lifestyle. Whether you're looking for
            air-purifying plants or those with delightful fragrances, we have
            something to delight every plant lover. Our team of experts is
            committed to ensuring each plant meets our rigorous standards of
            care and quality. Whether you're an experienced gardener or just
            beginning your green journey, we're here to guide you every step of
            the way. Explore our collection, ask questions, and let us help you
            find the ideal plant for your home or office. Join us in our mission
            to cultivate a greener, healthier world. Visit Paradise Nursery
            today and bring the beauty of nature to your doorstep.
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
