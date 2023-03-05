import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";

import images from "../images";

import ArrowUp from "../assets/images/TArrowUp.png";
import ArrowDown from "../assets/images/TArrowDown.png";

function Swiping() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <div className="swiperContain">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          style={{
            "--swiper-pagination-bullet-size": "20px",
            "--swiper-pagination-color": "blue",
          }}
          speed={600}
          pagination={{
            clickable: true,
          }}
          direction={"horizontal"}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          className="mySwiper"
        >
          {images.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <img src={img.img} alt="slide_image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <div className="swiper-button image-swiper-button-next">
          <img src={ArrowUp} alt="" />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <img src={ArrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Swiping;
