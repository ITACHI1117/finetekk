import React from "react";

function Footer() {
  return (
    <div id="footerBox" className="footerBox">
      <div className="footer">
        <div className="FTcolumn">
          <h2>Fintekk</h2>
          <p>
            Fintekk is the bank that does it all. Manage everything directly and
            easy with fintekk.
          </p>
        </div>
        <div className="FTcolumn">
          <h2>Company</h2>
          <li>Careers</li>
          <li>About Us</li>
          <li>Privacy</li>
          <li>Terms</li>
        </div>
        <div className="FTcolumn">
          <h2>Services</h2>
          <li>Payments</li>
          <li>Investments</li>
          <li>Saving Plans</li>
        </div>
        <div className="FTcolumn">
          <h2>Resources</h2>
          <li>Media</li>
          <li>FAQs</li>
          <li>Help Center</li>
          <li>Security</li>
        </div>
        <div className="FTcolumn">
          <h2>Contact Us</h2>
          <small>www.fintekk.com</small>
        </div>
      </div>
      <div className="CopyRow">
        <p>Copyright 2022 fintekk. All rights reserved</p>
        <p>Terms and Conditions, Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
