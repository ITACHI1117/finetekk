import React from "react";
import bloomberg from "../assets/images/bloomberg.png";
import cnbc from "../assets/images/cnbc.png";
import Forbes from "../assets/images/Forbes.png";
import stripe from "../assets/images/stripe.png";
import Quartz from "../assets/images/Quartz.png";
import { motion, transform } from "framer-motion";

function Brands() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0, duration: 5 }}
      // animate={{ y: 50 }}
      transition={{
        duration: 0.5,
        type: "tween",
      }}
      className="Brands"
    >
      <img src={bloomberg} alt="" />
      <img src={cnbc} alt="" />
      <img src={Forbes} alt="" />
      <img src={Quartz} alt="" />
      <img src={stripe} alt="" />
    </motion.div>
  );
}

export default Brands;
