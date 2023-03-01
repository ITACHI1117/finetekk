import React from "react";
import apple from "../assets/images/apple.png";
import playStore from "../assets/images/playStore.png";
import HeaderPic from "../assets/images/PictureFloatingCards.png";

function HeroSection() {
  return (
    <div className="Hero">
      <div className="Texts">
        <h1>Pay, Invest, Save your Cash with a single bank</h1>
        <p>
          Fintekk is the bank that does it all. Manage everything directly and
          easy with fintekk.
        </p>
        <button className="SignBtn">Sign Up</button>
        <div className="twoBtns">
          <button className="BtnG">
            <img src={playStore} alt="" />
            Google
          </button>
          <button className="BtnA">
            <img src={apple} alt="" />
            App Store
          </button>
        </div>
      </div>
      <div>
        <img className="Picture" src={HeaderPic} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
