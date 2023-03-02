import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import burger from "../assets/images/Burger.png";
import gsap from "gsap";

function Navbar() {
  const app = useRef();
  const tl = useRef();
  let [click2, setClick2] = useState(false);

  useLayoutEffect(() => {
    if (click2 == true) {
      console.log(click2);
      let body = document.querySelector("body");
      // let showMenu = document.getElementById("shownMenu");
      body.style.overflow = "hidden";
      // showMenu.style.display = "none";

      const ctx = gsap.context(() => {
        // Target the two specific elements we have forwarded refs to

        gsap.to("#box1", { rotation: 40, opacity: 1, duration: 1 });
        gsap.to("#box2", {
          y: -5,
          x: 5,
          rotation: -40,
          opacity: 1,
          duration: 1,
        });
        gsap.to("#box3", { opacity: 0 });
        // gsap.fromTo(
        //   showMenu,
        //   { y: -500, opacity: 0.5 },
        //   {
        //     y: 0,
        //     duration: 1,
        //     opacity: 1,
        //     borderRadius: "0%",
        //     display: "flex",
        //   }
        // );
      }, app);
    }
  }, [click2]);

  useLayoutEffect(() => {
    if (click2 == false) {
      let body = document.querySelector("body");
      let showMenu = document.getElementById("shownMenu");
      console.log("clicked2");
      body.style.overflowY = "scroll";
      const ctx = gsap.context(() => {
        // Target the two specific elements we have forwarded refs to

        gsap.to("#box1", { rotation: 0, opacity: 1, duration: 1 });
        gsap.to("#box2", {
          y: 0,
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
        });
        gsap.to("#box3", { opacity: 1 });
        gsap.fromTo(
          showMenu,
          { y: 0 },
          {
            y: "-100%",
            duration: 1,
            opacity: 0.5,
            // borderRadius: "50%",
            display: "none",
          }
        );
      });
    }
  });

  return (
    <div className="NavBar" ref={app}>
      <nav>
        <h1>FineTekk</h1>
        <ul>
          <li>
            <a href="#Hero">Home</a>
          </li>
          <li>
            <a href="#Services">About</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div>
          <button className="Btn1">Login</button>
          <button className="Btn2">Sign Up for Free</button>
          <div onClick={() => setClick2(!click2)} className="menu">
            <div id="box1" className="box1"></div>
            <div id="box2" className="box2"></div>
            <div id="box3" className="box3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
