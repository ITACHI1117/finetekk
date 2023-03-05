import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import mt1 from "../assets/images/mt1.png";
import mt2 from "../assets/images/mt2.png";
import mt3 from "../assets/images/mt3.png";
import mt4 from "../assets/images/mt4.png";
import mt5 from "../assets/images/mt5.png";
import mt6 from "../assets/images/mt6.png";

function Swiper1() {
  return (
    <div className="designer">
      <Carousel
        swipeable={true}
        showThumbs={false}
        axis="vertical"
        centerSlidePercentage={100}
      >
        <div>
          <img src={mt1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={mt2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={mt3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Swiper1;
