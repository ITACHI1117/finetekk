import React from "react";
import pana from "../assets/images/pana.png";
import DropDown from "../assets/images/arrowDown.png";
import { delay, motion } from "framer-motion";

function Faqs() {
  return (
    <div id="faqs" className="FaqsRow">
      <motion.div
        className="FaqsContainer"
        initial={{ opacity: 0.5, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      >
        <div className="Faqs">
          <h1>FAQs</h1>
          <div className="faqsBox">
            <p>Is fintekk’s security guaranteed?</p>
            <img src={DropDown} alt="" />
          </div>
          <div className="faqsBox">
            <p>How to activate Fintekk account</p>
            <img src={DropDown} alt="" />
          </div>
          <div className="faqsBox">
            <p>What should i do if i forget my pin</p>
            <img src={DropDown} alt="" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="Pana"
        initial={{ opacity: 0.5, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      >
        <img src={pana} alt="" />
      </motion.div>
    </div>
  );
}

export default Faqs;
