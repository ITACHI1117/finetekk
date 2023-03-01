import React from "react";

function Navbar() {
  return (
    <div className="NavBar">
      <nav>
        <h1>FineTekk</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div>
          <button className="Btn1">Login</button>
          <button className="Btn2">Sign Up for Free</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
