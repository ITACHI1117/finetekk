import React from "react";
import ActiveUserTrust from "../components/ActiveUserTrust";
import Brands from "../components/Brands";
import DownloadApp from "../components/DownloadApp";
import Faqs from "../components/Faqs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import OurServices from "../components/OurServices";
import Testemonials from "../components/Testemonials";

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
      <Testemonials />
      <Newsletter />
    </div>
  );
}

export default LandingPage;
