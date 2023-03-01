import React from "react";
import arrow from "../assets/images/arrow.png";
import pay from "../assets/images/pay.png";
import save from "../assets/images/save.png";
import invest from "../assets/images/invest.png";

function OurServices() {
  return (
    <div className="Services">
      <h3>OUR SERVICES</h3>
      <h1>What we offer</h1>
      <p>
        We help individuals become more flexible and responsible with their
        finances and handle payments smooth and easy.{" "}
      </p>
      <div className="ServiceBoxes">
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
      </div>
    </div>
  );
}

export default OurServices;
