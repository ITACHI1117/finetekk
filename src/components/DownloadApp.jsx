import React from "react";
import iPhone from "../assets/images/iPhone.png";
import { motion } from "framer-motion";

function DownloadApp() {
  return (
    <div className="DownloadApp">
      <img src={iPhone} alt="" />
      <motion.div
        className="guide"
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
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
      </motion.div>
    </div>
  );
}

export default DownloadApp;
