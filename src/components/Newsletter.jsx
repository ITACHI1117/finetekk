import React from "react";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <motion.div
      className="Newsletter"
      initial={{ opacity: 0.5, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ y: 50 }}
      transition={{
        duration: 1,
        type: "tween",
      }}
    >
      <div className="Sign">
        <h1>Start growing your wealth today</h1>
        <form action="">
          <div className="InputBox">
            <input type="text" placeholder="Enter your email address" />
            <button className="Btn1">Sign Up</button>
          </div>
        </form>
        <button className="Btn2">Sign Up</button>
      </div>
    </motion.div>
  );
}

export default Newsletter;
