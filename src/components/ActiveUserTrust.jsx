import React from "react";
import { motion } from "framer-motion";

function ActiveUserTrust() {
  return (
    <div className="UserTrust">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 5 }}
        // animate={{ y: 50 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
      >
        More than <span>10,000</span> active users trust Fintekk
      </motion.h1>
    </div>
  );
}

export default ActiveUserTrust;
