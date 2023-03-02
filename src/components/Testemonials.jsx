import React from "react";
import Gstar from "../assets/images/GStar.png";
import OutStar from "../assets/images/OutStar.png";
import ArrowUp from "../assets/images/TArrowUp.png";
import ArrowDownn from "../assets/images/TArrowDown.png";
import { delay, motion } from "framer-motion";

function Testemonials() {
  return (
    <div className="TestContain">
      <div className="Test">
        <motion.div
          className="TestColumn"
          initial={{ opacity: 0.5, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          // animate={{ y: 50 }}
          transition={{
            duration: 1,
            type: "tween",
          }}
        >
          <h3>TESTIMONIALS</h3>
          <h1>What Our Customers Say About Us</h1>
        </motion.div>
        <motion.div
          className="TestBox"
          initial={{ opacity: 0.5, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          // animate={{ y: 50 }}
          transition={{
            duration: 1,
            type: "tween",
          }}
        >
          <p>
            Dealt with enquiry and subsequent order efficiently and quickly. So
            pleased with price and service i ordered a second one
          </p>
          <h4>Maryam Adegoke</h4>
          <div className="Stars">
            <img src={Gstar} alt="" />
            <img src={Gstar} alt="" />
            <img src={Gstar} alt="" />
            <img src={Gstar} alt="" />
            <img src={OutStar} alt="" />
          </div>
        </motion.div>
        <div className="ArrBtns">
          <img className="upBtn" src={ArrowUp} alt="" />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <img className="downBtn" src={ArrowDownn} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
