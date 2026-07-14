import React, { Component } from "react";
import "./hero.css";

function Hero() {
  return (
    //

    <div className="hero px-5">
      {/* Left Side */}
      <div className="hero-left px-5 ml-5">
        <h3 className="hero-title">Support Portal</h3>

        <p className="hero-text">
          Search for an answer or browse help topics to create a ticket
        </p>

        <input
          className="hero-input"
          type="text"
          placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
        />

        <div className="hero-links">
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday margins</a>
          <a href="#">Kite user manual</a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <h4>Featured</h4>
        <p>1. Current Takeovers and Delisting – January 2024</p>
        <p>2. Latest Intraday leverages – MIS & CO</p>
      </div>
    </div>
  );
}

export default Hero;
