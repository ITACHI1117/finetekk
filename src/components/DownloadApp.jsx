import React from "react";
import iPhone from "../assets/images/iPhone.png";

function DownloadApp() {
  return (
    <div className="DownloadApp">
      <img src={iPhone} alt="" />
      <div className="guide">
        <h1>Start the journey to reach your financial goals today.</h1>
        <div className="ListRow">
          <div className="NoLine">
            <h3>01</h3>
            <div className="line"></div>
          </div>
          <div className="ListColumn">
            <h3>Download the mobile app</h3>
            <p>
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
        </div>
        <div className="ListRow">
          <div className="NoLine">
            <h3>02</h3>
            <div className="line"></div>
          </div>
          <div className="ListColumn">
            <h3>Create a free account</h3>
            <p>
              Sign up for an account with your name, email and phone number.{" "}
            </p>
          </div>
        </div>
        <div className="ListRow">
          <div className="NoLine">
            <h3>03</h3>
          </div>
          <div className="ListColumn">
            <h3>Add a payment method</h3>
            <p>
              Using your debit card, bank account, QR code, perform your first
              transaction.
            </p>
          </div>
        </div>
        <div className="CenterButton">
          <button>Download Now</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
