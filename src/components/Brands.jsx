import React from "react";
import bloomberg from "../assets/images/bloomberg.png";
import cnbc from "../assets/images/cnbc.png";
import Forbes from "../assets/images/Forbes.png";
import stripe from "../assets/images/stripe.png";
import Quartz from "../assets/images/Quartz.png";

function Brands() {
  return (
    <div className="Brands">
      <img src={bloomberg} alt="" />
      <img src={cnbc} alt="" />
      <img src={Forbes} alt="" />
      <img src={Quartz} alt="" />
      <img src={stripe} alt="" />
    </div>
  );
}

export default Brands;
