import React, { useState, useRef, useLayoutEffect } from "react";
import apple from "../assets/images/apple.png";
import playStore from "../assets/images/playStore.png";
import HeaderPic from "../assets/images/PictureFloatingCards.png";
import { delay, motion } from "framer-motion";
import gsap from "gsap";

function HeroSection() {
  const [reversed, setReversed] = useState(null);
  const [count, setCount] = useState(0);
  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".Texts h1",
        {
          y: 150,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1.2 }
      );
      gsap.fromTo(
        ".Texts p",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
      );
      gsap.fromTo(
        ".SignBtn",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1.2, delay: 1 }
      );
      gsap.fromTo(
        ".SignBtn",
        {
          scale: 0.5,
        },
        { scale: 1, delay: 1.2, duration: 3, ease: "back" }
      );
      gsap.fromTo(
        ".twoBtns",
        {
          opacity: 0,
          scale: 0.5,
        },
        { scale: 1, opacity: 1, delay: 1.2, duration: 3, ease: "back" }
      );
      gsap.fromTo(
        ".Picture",
        {
          y: 100,
          opacity: 0,
          scale: 0.5,
        },
        { y: 0, scale: 1, opacity: 1, delay: 0.5, duration: 3, ease: "back" }
      );
    }, app);
    return () => {
      ctx.revert();
    };
  });
  return (
    <div id="Hero" className="Hero" ref={app}>
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
