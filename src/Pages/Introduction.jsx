import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RegisterFlow from "../Components/RegisterFlow";
import Schedule from "../Components/Schedule";

const Introduction = () => {
  return (
    <div className="pl-16">
      <Navbar />
      <Hero />
      <RegisterFlow />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Introduction;
