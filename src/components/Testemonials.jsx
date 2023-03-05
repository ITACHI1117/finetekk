import React, { useState, useEffect, useRef } from "react";
import Gstar from "../assets/images/GStar.png";
import OutStar from "../assets/images/OutStar.png";
import ArrowUp from "../assets/images/TArrowUp.png";
import ArrowDownn from "../assets/images/TArrowDown.png";
import { motion } from "framer-motion";
import TestData from "../TestData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";

function Testemonials() {
  const app = useRef();

  const [direction, setDirection] = useState("vertical");

  useEffect(() => {
    let width = window.screen.width;
    if (width <= 500) {
      setDirection("horizontal");
    }
  }, [direction]);

  const pagination = {
    el: ".image-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="TestContain" ref={app}>
      <div className="Test">
        <motion.div
          className="TestColumn"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          // animate={{ y: 50 }}
          transition={{
            duration: 1,
            type: "tween",
          }}
        >
          <h3>TESTIMONIALS</h3>
          <h1>What Our Customers Say About Us</h1>
        </motion.div>

        <div className="TestemonRow">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            speed={600}
            pagination={pagination}
            direction={direction}
            spaceBetween={20}
            grabCursor={true}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            style={{
              "--swiper-pagination-bullet-size": "20px",
              "--swiper-theme-color": "green",
            }}
            className="mySwiper"
          >
            {TestData.map((test) => {
              return (
                <SwiperSlide key={test.id}>
                  <div className="TestBox">
                    <p>{test.text} </p>
                    <h4>{test.name}</h4>
                    <div className="Stars">
                      <img src={Gstar} alt="" />
                      <img src={Gstar} alt="" />
                      <img src={Gstar} alt="" />
                      <img src={Gstar} alt="" />
                      <img src={OutStar} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="ArrBtns">
          <img
            id="upBtn"
            className="swiper-button image-swiper-button-prev"
            src={ArrowUp}
            alt=""
          />
          <div className="image-swiper-pagination"></div>
          <img
            className="swiper-button image-swiper-button-next"
            src={ArrowDownn}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
