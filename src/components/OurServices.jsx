import React from "react";
import arrow from "../assets/images/arrow.png";
import pay from "../assets/images/pay.png";
import save from "../assets/images/save.png";
import invest from "../assets/images/invest.png";
import { motion, transform } from "framer-motion";

function OurServices() {
  return (
    <div id="Services" className="Services">
      <motion.h3
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        OUR SERVICES
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        What we offer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        We help individuals become more flexible and responsible with their
        finances and handle payments smooth and easy.{" "}
      </motion.p>
      <motion.div
        className="ServiceBoxes"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        <div className="serviceBox1">
          <h2>Easy Payment</h2>
          <p>
            Stress-free payment for all transactions that you do at any time.
          </p>
          <a href="#">
            Read More
            <img src={arrow} alt="" />
          </a>
          <div className="serviceImg">
            <img src={pay} alt="" />
          </div>
        </div>
        <div className="serviceBox2">
          <h2>Investments</h2>
          <p>
            Grow your money by investing in pre-vetted investment opportunities.{" "}
          </p>
          <a href="#">
            Read More
            <img src={arrow} alt="" />
          </a>
          <div className="serviceImg">
            <img src={invest} alt="" />
          </div>
        </div>
        <div className="serviceBox1">
          <h2>Fixed Savings</h2>
          <p>
            Build a dedicated savings faster on your terms automatically or
            manually.{" "}
          </p>
          <a href="#">
            Read More
            <img src={arrow} alt="" />
          </a>
          <div className="serviceImg">
            <img src={save} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurServices;
