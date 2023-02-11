import React from "react";
import Products from "./Products";
import Support from "./Support";
import Herobanner from "./../img/ban-heroo.webp";

const Hero = () => {
  return (
    <div className="hero">
      <img className="img" src={Herobanner} />
      <Products />
      <Support />
      <span></span>
    </div>
  );
};

export default Hero;
