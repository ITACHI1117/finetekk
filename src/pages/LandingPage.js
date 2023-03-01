import React from "react";
import ActiveUserTrust from "../components/ActiveUserTrust";
import Brands from "../components/Brands";
import DownloadApp from "../components/DownloadApp";
import Faqs from "../components/Faqs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Brands />
      <ActiveUserTrust />
      <OurServices />
      <DownloadApp />
      <Faqs />
    </div>
  );
}

export default LandingPage;
