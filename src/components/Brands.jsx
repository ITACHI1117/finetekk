import React, { useRef, useLayoutEffect } from "react";
import bloomberg from "../assets/images/bloomberg.png";
import cnbc from "../assets/images/cnbc.png";
import Forbes from "../assets/images/Forbes.png";
import stripe from "../assets/images/stripe.png";
import Quartz from "../assets/images/Quartz.png";
import { motion } from "framer-motion";
import gsap from "gsap";

function Brands() {
  const app = useRef();

  let width = window.screen.width;
  console.log(width);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (width < 500) {
        console.log(width);
        gsap.fromTo(
          ".BrandMove",
          {
            x: 450,
            opacity: 1,
          },
          { repeat: -1, x: -800, opacity: 1, duration: 15, ease: "none" }
        );
      }
    }, app);
    return () => {
      ctx.revert();
    };
  });
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
      ref={app}
    >
      <div className="BrandMove">
        <img src={bloomberg} alt="" />
        <img src={cnbc} alt="" />
        <img src={Forbes} alt="" />
        <img src={Quartz} alt="" />
        <img src={stripe} alt="" />
      </div>
    </motion.div>
  );
}

export default Brands;
