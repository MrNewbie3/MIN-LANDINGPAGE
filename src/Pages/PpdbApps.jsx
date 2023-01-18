import React from "react";
import TabsBtn from "../Components/Dashboard-Tabs";
import FooterForms from "../Components/Form_Footer";
import Navbar from "../Components/Navbar";

const PpdbApps = () => {
  return (
    <div className="px-16 font-Open-sans">
      <Navbar />
      <TabsBtn />
      <FooterForms />
    </div>
  );
};

export default PpdbApps;
