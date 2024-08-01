import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png"
import hero_image from "../../assets/hero_image.png"
import "./Hero.css";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <Link id="decoration" style={{color:"white"}} to={'/shop'} ><div>Latest Collection</div></Link>
          {/* <div>Latest Collection</div> */}
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
