import React from "react";
import AboutUs from "./AboutUs.jsx";
import HeroSection from "./HeroSection.jsx";
import Services from "./Services.jsx";
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";
import ContactUs from "./ContactUs.jsx";
import Qualities from "./Qualities.jsx";
import Menu from "./Menu.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Qualities />
      <Menu />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
