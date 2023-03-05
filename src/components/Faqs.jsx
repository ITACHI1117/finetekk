import React, { useState, useLayoutEffect, useRef } from "react";
import pana from "../assets/images/pana.png";
import DropDown from "../assets/images/arrowDown.png";
import { motion } from "framer-motion";
import gsap from "gsap";

function Faqs() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const app = useRef();

  useLayoutEffect(() => {
    const dt1 = document.getElementById("dt1");
    // dt1.onmouseleave();
    console.log(dt1);
    dt1.className = "displayText active";
    if (clicked === true) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "#dt1",
          {
            y: -10,
            opacity: 0,
          },
          { y: 0, opacity: 1, duration: 1, ease: "power1", display: "flex" }
        );
      }, app);
      return () => {
        ctx.revert();
      };
    }
    if (clicked2 === true) {
      dt1.style.display = "none";
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "#dt2",
          {
            y: -10,
            opacity: 0,
          },
          { y: 0, opacity: 1, duration: 1, ease: "power1", display: "flex" }
        );
        // gsap.to(dt1, { display: "none" });
      }, app);
      return () => {
        ctx.revert();
      };
    }
    if (clicked3 === true) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "#dt3",
          {
            y: -10,
            opacity: 0,
          },
          { y: 0, opacity: 1, duration: 1, ease: "power1", display: "flex" }
        );
      }, app);
      return () => {
        ctx.revert();
      };
    }
  });
  return (
    <div id="faqs" className="FaqsRow" ref={app}>
      <motion.div
        className="FaqsContainer"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
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
            <img onClick={() => setClicked(!clicked)} src={DropDown} alt="" />
          </div>
          <div id="dt1" className="displayText">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
          <div className="faqsBox">
            <p>How to activate Fintekk account</p>
            <img onClick={() => setClicked2(!clicked2)} src={DropDown} alt="" />
          </div>
          <div id="dt2" className="displayText">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
          <div className="faqsBox">
            <p>What should i do if i forget my pin</p>
            <img onClick={() => setClicked3(!clicked3)} src={DropDown} alt="" />
          </div>
          <div id="dt3" className="displayText">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="Pana"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      >
        <img className="faqImg" src={pana} alt="" />
      </motion.div>
    </div>
  );
}

export default Faqs;
