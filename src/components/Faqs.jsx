import React from "react";
import pana from "../assets/images/pana.png";
import DropDown from "../assets/images/arrowDown.png";

function Faqs() {
  return (
    <div className="FaqsRow">
      <div className="FaqsContainer">
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
      </div>

      <div className="Pana">
        <img src={pana} alt="" />
      </div>
    </div>
  );
}

export default Faqs;
